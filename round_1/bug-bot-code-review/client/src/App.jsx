import React, { useEffect, useState } from 'react';

export default function App() {
	const [users, setUsers] = useState(null);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		fetch('/api/v2/users')
			.then((res) => {
				if (!res.ok) {
					return res
						.json()
						.then((body) => Promise.reject(new Error(body?.error || `HTTP ${res.status}`)));
				}
				return res.json();
			})
			.then((json) => {
				setUsers(Array.isArray(json?.data) ? json.data : []);
				setLoading(false);
			})
			.catch((e) => {
				setError(e.message || 'Failed to load users');
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


