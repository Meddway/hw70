import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav>
      <div className="m-3">
      <Link to="/">Home</Link>
      </div>
      <div className="m-3">
      <Link to="/add" className="m-3">Add new contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;