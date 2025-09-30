import React from 'react';
import './Header.css';

/**
 * Header component displaying the team name
 */
const Header: React.FC = () => {
  return (
    <header className="header">
      <h1 className="header__title">Kansas Speech and Debate Team</h1>
    </header>
  );
};

export default Header;

