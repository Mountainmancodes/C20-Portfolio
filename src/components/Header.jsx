import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaUser, FaCode, FaEnvelope, FaFileAlt } from 'react-icons/fa';

function Header() {
  const navItems = [
    { name: 'About Me', icon: <FaUser />, path: '/' },
    { name: 'Portfolio', icon: <FaCode />, path: '/portfolio' },
    { name: 'Contact', icon: <FaEnvelope />, path: '/contact' },
    { name: 'Resume', icon: <FaFileAlt />, path: '/resume' },
  ];

  return (
    <header>
      <h1>Joshua Hernandez</h1>
      <nav>
        <ul>
          {navItems.map((item, index) => (
            <li key={index}>
              <NavLink 
                to={item.path}
                className={({ isActive }) => isActive ? 'active' : ''}
                aria-label={item.name}
              >
                {item.icon} {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
