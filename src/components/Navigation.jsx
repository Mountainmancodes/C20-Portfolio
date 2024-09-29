import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaUser, FaCode, FaEnvelope, FaFileAlt } from 'react-icons/fa';

function Navigation() {
  const tabs = [
    { name: 'About Me', icon: <FaUser />, path: '/' },
    { name: 'Portfolio', icon: <FaCode />, path: '/portfolio' },
    { name: 'Contact', icon: <FaEnvelope />, path: '/contact' },
    { name: 'Resume', icon: <FaFileAlt />, path: '/resume' },
  ];

  return (
    <nav className="tab-navigation">
      {tabs.map((tab, index) => (
        <NavLink
          key={index}
          to={tab.path}
          className={({ isActive }) => 
            `tab-button ${isActive ? 'active' : ''}`
          }
          aria-label={tab.name}
        >
          {tab.icon} {tab.name}
        </NavLink>
      ))}
    </nav>
  );
}

export default Navigation;
