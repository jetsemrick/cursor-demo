import crypto from 'crypto';
import { createUser, findByEmail } from '../models/userModel.js';
import { issueAccessToken } from './tokenService.js';
import { sendWelcomeEmail } from './emailService.js';
import { createCustomer } from './billingService.js';

function hashPassword(password, salt = crypto.randomBytes(16).toString('hex')) {
	const hash = crypto.createHmac('sha256', salt).update(password).digest('hex');
	return { hash, salt };
}

export async function register({ email, password }) {
	if (!email || !password) throw new Error('email and password required');
	if (password.length < 8) throw new Error('password must be at least 8 chars');
	if (findByEmail(email)) throw new Error('Email already registered');
	const { hash, salt } = hashPassword(password);
	const user = createUser({ email, passwordHash: hash, salt });
	// Side effects (fire-and-forget in demo)
	sendWelcomeEmail(user.email).catch(() => {});
	createCustomer(user.id, user.email).catch(() => {});
	const token = issueAccessToken({ sub: user.id, email: user.email });
	return { user: { id: user.id, email: user.email, createdAt: user.createdAt }, token };
}

export async function login({ email, password }) {
	if (!email || !password) throw new Error('email and password required');
	const user = findByEmail(email);
	if (!user) throw new Error('invalid credentials');
	const { hash } = hashPassword(password, user.salt);
	if (hash !== user.passwordHash) throw new Error('invalid credentials');
	const token = issueAccessToken({ sub: user.id, email: user.email });
	return { user: { id: user.id, email: user.email, createdAt: user.createdAt }, token };
}


