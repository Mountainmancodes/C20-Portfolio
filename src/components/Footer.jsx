import React from 'react';
import { FaGithub } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <div className="social-links">
        <a href="https://github.com/mountainmancodes" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <FaGithub />
        </a>
      </div>
      <p>&copy; 2024 Joshua Hernandez 🏔️ | Scaling New Heights in Code</p>
    </footer>
  );
}

export default Footer;
