import express from 'express';

const app = express();
app.use(express.json());

app.get('/api/v2/users', (_req, res) => {
	res.json({ data: [{ id: '1', name: 'Ada Lovelace' }, { id: '2', name: 'Grace Hopper' }] });
});

app.use((req, res) => {
	res.status(404).json({ ok: false, error: 'Not Found', path: req.path });
});

const port = process.env.PORT || 5174;
app.listen(port, () => {
	// eslint-disable-next-line no-console
	console.log(`Bug Bot API listening on http://localhost:${port}`);
});


