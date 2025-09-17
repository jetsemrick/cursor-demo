import express from 'express';
import apiRoutes from './routes/apiRoutes.js';

const app = express();
app.use(express.json());

app.use('/api', apiRoutes);

// 404 handler
app.use((req, res) => {
	res.status(404).json({ ok: false, error: 'Not Found', path: req.path });
});

if (process.env.NODE_ENV !== 'test') {
	const port = process.env.PORT || 4000;
	app.listen(port, () => {
		// eslint-disable-next-line no-console
		console.log(`Codebase-Intelligence server http://localhost:${port}`);
	});
}

export default app;


