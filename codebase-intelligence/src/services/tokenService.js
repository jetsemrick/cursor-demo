import jwt from 'jsonwebtoken';

const ACCESS_TOKEN_TTL = '15m';
const JWT_SECRET = process.env.JWT_SECRET || 'dev-secret-change-me';

export function issueAccessToken(payload) {
	return jwt.sign(payload, JWT_SECRET, { expiresIn: ACCESS_TOKEN_TTL });
}

export function verifyAccessToken(token) {
	return jwt.verify(token, JWT_SECRET);
}


