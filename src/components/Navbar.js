import React from 'react';
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
  return (
    <>
      <nav>
        <div className="nav-wrapper blue">
          <NavLink to="/" className="brand-logo">Test</NavLink>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><NavLink to="/home">Home</NavLink></li>
            <li><NavLink to="/details">Details</NavLink></li>
            <li><NavLink to="/article">Article</NavLink></li>
          </ul>
        </div>
      </nav>
    </>
  );
};