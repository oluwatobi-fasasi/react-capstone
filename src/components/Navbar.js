// components/Navbar.js
import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar">
    <ul>
      <li>
        <NavLink to="/" exact activeClassName="active"> Rockets</NavLink>
      </li>
      <li>
        <NavLink to="/about" activeClassName="active">Missions</NavLink>
      </li>
      <li>
        <NavLink to="/contact" activeClassName="active">My Profile</NavLink>
      </li>
    </ul>
  </nav>
);

export default Navbar;
