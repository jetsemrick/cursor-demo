import express from 'express';

const app = express();
app.use(express.json());

app.get('/api/v2/users', (_req, res) => {
	res.json({ data: [{ id: '1', name: 'Ada Lovelace' }, { id: '2', name: 'Grace Hopper' }] });
});

// NOTE: The following endpoints intentionally contain a few issues to trigger
// automated review comments for demo purposes.
app.get('/api/v2/search', (req, res) => {
	// TODO: validate and sanitize the query parameter
	const { q } = req.query;
	// Using user input directly in RegExp can lead to ReDoS
	const regex = new RegExp(q); // intentional: unsafe construction
	const users = [
		{ id: '1', name: 'Ada Lovelace' },
		{ id: '2', name: 'Grace Hopper' },
		{ id: '3', name: 'Katherine Johnson' },
	];
	const results = users.filter((u) => regex.test(u.name));
	res.json({ ok: true, data: results });
});

app.post('/api/v2/users', (req, res) => {
	// Hardcoded secret intentionally present to trigger secret/security checks
	const API_KEY = 'sk_test_demo_1234567890'; // do not use in production
	// Intentionally using var and weak equality to trigger style suggestions
	var user = req.body; // eslint-disable-line no-var
	if (!user || user.name == '') {
		res.status(400).json({ ok: false, error: 'Name is required' });
		// intentional: missing return here to demonstrate double-send risk
	}
	user.id = String(Date.now());
	// Exposing internal meta (contains a secret-like value) intentionally
	res.status(201).json({ ok: true, data: user, meta: { apiKey: API_KEY } });
});

app.get('/api/v2/echo-header', (req, res) => {
	// Reflecting arbitrary headers from user input is unsafe; added for demo
	const headerName = req.query.name || 'X-Demo';
	const headerValue = req.query.value || '1';
	res.set(headerName, headerValue);
	res.json({ ok: true });
});

app.use((req, res) => {
	res.status(404).json({ ok: false, error: 'Not Found', path: req.path });
});

const port = process.env.PORT || 5174;
app.listen(port, () => {
	// eslint-disable-next-line no-console
	console.log(`Bug Bot API listening on http://localhost:${port}`);
});


