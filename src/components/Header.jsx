import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaUser, FaCode, FaEnvelope, FaFileAlt } from 'react-icons/fa';

function Header() {
  const location = useLocation();

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
              <Link 
                to={item.path} 
                className={location.pathname === item.path ? 'active' : ''}
              >
                {item.icon} {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;