import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => (
  <header className="header">
    <nav>
      <NavLink to="/" exact="true" activeclassname="active">Home</NavLink>
      <NavLink to="/skills" activeclassname="active">Skills</NavLink>
      <NavLink to="/experience" activeclassname="active">Experience</NavLink>
      <NavLink to="/projects" activeclassname="active">Projects</NavLink>
      <NavLink to="/ai-experience" activeclassname="active">AI</NavLink>
      <NavLink to="/contact" activeclassname="active">Contact</NavLink>
    </nav>
  </header>
);

export default Header;
