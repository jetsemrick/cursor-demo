export async function createCustomer(userId, email) {
	await new Promise((resolve) => setTimeout(resolve, 5));
	if (!userId || !email) throw new Error('missing fields');
	return { ok: true, customerId: `cust_${userId}` };
}


