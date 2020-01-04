import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => (
  <header className="header">
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <Link className="navbar-brand" to="/">Text Layout App</Link>
    </nav>
  </header>
);

export default Header;
