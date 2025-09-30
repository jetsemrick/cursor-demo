import React, { ReactNode } from 'react';
import './Layout.css';

interface LayoutProps {
  children: ReactNode;
}

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
