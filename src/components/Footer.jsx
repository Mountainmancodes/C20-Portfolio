import React from 'react';
import { FaGithub, FaLinkedin, FaStackOverflow } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <div className="social-links">
        <a href="https://github.com/mountainmancodes" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://stackoverflow.com/users/your-user-id" target="_blank" rel="noopener noreferrer">
          <FaStackOverflow />
        </a>
      </div>
      <p>&copy; 2024 Joshua Hernandez 🏔️ | Scaling New Heights in Code</p>
    </footer>
  );
}

export default Footer;