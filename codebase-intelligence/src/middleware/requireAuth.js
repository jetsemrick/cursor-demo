import { verifyAccessToken } from '../services/tokenService.js';

export default function requireAuth(req, res, next) {
	const header = req.headers['authorization'] || '';
	const [scheme, token] = header.split(' ');
	if (scheme !== 'Bearer' || !token) {
		return res.status(401).json({ ok: false, error: 'Missing or invalid Authorization header' });
	}
	try {
		const payload = verifyAccessToken(token);
		req.auth = payload;
		return next();
	} catch (_err) {
		return res.status(401).json({ ok: false, error: 'Invalid or expired token' });
	}
}


