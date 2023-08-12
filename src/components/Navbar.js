// components/Navbar.js
import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar">
    <div className="logo">
      <img src="./planet (1).png" alt="Logo" />
      <h1>Space Travelers Hub</h1>
    </div>
    <ul>
      <li><NavLink to="/" activeClassName="active"> Rockets</NavLink></li>
      <li><NavLink to="/dragons" activeClassName="active">Dragons</NavLink></li>
      <li><NavLink to="/missions" activeClassName="active">Missions</NavLink></li>
      <li><NavLink to="/profile" activeClassName="active">My Profile</NavLink></li>
    </ul>
  </nav>
);

export default Navbar;
