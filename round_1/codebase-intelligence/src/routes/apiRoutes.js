import { Router } from 'express';
import * as authService from '../services/authService.js';
import requireAuth from '../middleware/requireAuth.js';
import { getById } from '../models/userModel.js';

const router = Router();

router.post('/register', async (req, res) => {
	try {
		const { email, password } = req.body || {};
		const result = await authService.register({ email, password });
		return res.json({ ok: true, ...result });
	} catch (err) {
		return res.status(400).json({ ok: false, error: err.message || 'unknown' });
	}
});

router.post('/login', async (req, res) => {
	try {
		const { email, password } = req.body || {};
		const result = await authService.login({ email, password });
		return res.json({ ok: true, ...result });
	} catch (err) {
		return res.status(400).json({ ok: false, error: err.message || 'unknown' });
	}
});

router.get('/me', requireAuth, (req, res) => {
	const user = getById(req.auth.sub);
	if (!user) return res.status(404).json({ ok: false, error: 'User not found' });
	return res.json({ ok: true, user: { id: user.id, email: user.email, createdAt: user.createdAt } });
});

export default router;


