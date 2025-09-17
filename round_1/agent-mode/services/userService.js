export async function getUser(userId) {
	await new Promise((resolve) => setTimeout(resolve, 50));
	if (!userId) throw new Error('userId is required');
	return {
		id: String(userId),
		name: 'Ada Lovelace',
		email: 'ada@example.com',
		createdAt: new Date().toISOString(),
	};
}


