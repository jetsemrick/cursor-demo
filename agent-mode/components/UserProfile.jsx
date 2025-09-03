import React from 'react';
import { getUser } from '../services/userService.js';

class UserProfile extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: true,
			error: null,
			user: null,
		};
	}

	componentDidMount() {
		const { userId } = this.props;
		getUser(userId)
			.then((user) => this.setState({ user, loading: false }))
			.catch((err) => this.setState({ error: err?.message || 'Failed to load user', loading: false }));
	}

	render() {
		const { loading, error, user } = this.state;
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
}

export default UserProfile;

 