// In-memory user store for demo purposes
const users = new Map();
let nextId = 1;

export function createUser({ email, passwordHash, salt }) {
	if (usersByEmail().has(email)) {
		throw new Error('Email already registered');
	}
	const id = String(nextId++);
	const user = { id, email, passwordHash, salt, createdAt: new Date().toISOString() };
	users.set(id, user);
	return user;
}

export function findByEmail(email) {
	for (const user of users.values()) {
		if (user.email === email) return user;
	}
	return null;
}

export function getById(id) {
	return users.get(id) || null;
}

export function usersByEmail() {
	const map = new Map();
	for (const user of users.values()) map.set(user.email, user);
	return map;
}


