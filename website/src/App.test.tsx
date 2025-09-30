import { render, screen } from '@testing-library/react';
import App from './App';

test('renders speech and debate team title', () => {
  render(<App />);
  const titleElement = screen.getByText(/Shawnee Mission East Speech and Debate Team/i);
  expect(titleElement).toBeInTheDocument();
});
