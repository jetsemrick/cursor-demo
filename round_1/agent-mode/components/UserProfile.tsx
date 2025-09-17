// @ts-nocheck
import React, { useEffect, useState } from 'react';
import { getUser } from '../services/userService.js';
import type { User } from '../types/user';

type UserProfileProps = {
	userId: string;
};

function UserProfile({ userId }: UserProfileProps) {
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);
	const [user, setUser] = useState<User | null>(null);

	useEffect(() => {
		let isActive = true;
		setLoading(true);
		setError(null);
		setUser(null);

		getUser(userId)
			.then((fetchedUser) => {
				if (!isActive) return;
				setUser(fetchedUser as User);
				setLoading(false);
			})
			.catch((err: unknown) => {
				if (!isActive) return;
				const message = err && typeof err === 'object' && 'message' in err ? String((err as Error).message) : 'Failed to load user';
				setError(message);
				setLoading(false);
			});

		return () => {
			isActive = false;
		};
	}, [userId]);

	if (loading) return <div data-testid="loading">Loading...</div>;
	if (error) return <div role="alert">{error}</div>;
	if (!user) return <div>No user</div>;

	return (
		<div>
			<h1 data-testid="user-name">{user.name}</h1>
			<p>{user.email}</p>
		</div>
	);
}

export default UserProfile;


