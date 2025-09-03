import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import UserProfile from '../components/UserProfile.jsx';
import * as userService from '../services/userService.js';

jest.mock('../services/userService.js');

test('renders user name after load', async () => {
	userService.getUser.mockResolvedValue({
		id: '1',
		name: 'Ada Lovelace',
		email: 'ada@example.com',
		createdAt: '2020-01-01T00:00:00.000Z',
	});

	render(<UserProfile userId="1" />);

	expect(screen.getByTestId('loading')).toBeInTheDocument();

	await waitFor(() => {
		expect(screen.getByTestId('user-name')).toHaveTextContent('Ada Lovelace');
	});
});


