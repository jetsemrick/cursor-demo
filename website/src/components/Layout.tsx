import React, { ReactNode } from 'react';
import './Layout.css';

interface LayoutProps {
  children: ReactNode;
}

/**
 * Layout component that wraps the entire application
 * Provides consistent container styling and structure
 */
const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="layout">
      <div className="layout__container">
        {children}
      </div>
    </div>
  );
};

export default Layout;

