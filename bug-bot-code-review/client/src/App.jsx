import React, { useEffect, useState } from 'react';

export default function App() {
	const [users, setUsers] = useState(null);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		// Staged bug: wrong endpoint and missing error handling
		setLoading(true);
		fetch('/api/users')
			.then((res) => res.json())
			.then((json) => {
				// If fetch failed, json is undefined → TypeError: Cannot read property 'data' of undefined
				setUsers(json.data);
				setLoading(false);
			})
			.catch((e) => {
				// Intentionally minimal to let bug surface
				setError(e.message);
				setLoading(false);
			});
	}, []);

	return (
		<div style={{ fontFamily: 'Inter, system-ui, Arial', padding: 24 }}>
			<h1>Bug Bot Demo</h1>
			<button onClick={() => window.location.reload()}>Reload</button>
			{loading && <p>Loading…</p>}
			{error && <pre style={{ color: 'crimson' }}>{error}</pre>}
			<ul>
				{users?.map((u) => (
					<li key={u.id}>{u.name}</li>
				))}
			</ul>
		</div>
	);
}


