export async function sendWelcomeEmail(email) {
	// Simulate async email send
	await new Promise((resolve) => setTimeout(resolve, 5));
	if (!email?.includes('@')) throw new Error('invalid email');
	return { ok: true };
}


