import React from 'react';
import { FaDownload, FaCode, FaLanguage, FaDatabase } from 'react-icons/fa';

function Resume() {
  const handleResumeClick = () => {
    window.open('/assets/images/IT Systems Analyst Associate Resume.pdf', '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="resume" className="resume-section">
      <div className="resume-content">
        <div className="resume-header">
          <h2>Resume</h2>
          <button 
            className="resume-button" 
            onClick={handleResumeClick}
            aria-label="Download Resume"
          >
            <FaDownload />Resume
          </button>
        </div>
        
        <div className="skills">
          <div className="skill-category">
            <FaCode className="skill-icon" />
            <h3>Frontend Technologies</h3>
            <ul>
              <li>Angular</li>
              <li>ReactJS</li>
              <li>Ionic</li>
              <li>HTML/CSS</li>
              <li>Bootstrap</li>
            </ul>
          </div>
          <div className="skill-category">
            <FaLanguage className="skill-icon" />
            <h3>Programming Languages</h3>
            <ul>
              <li>TypeScript</li>
              <li>JavaScript</li>
            </ul>
          </div>
          <div className="skill-category">
            <FaDatabase className="skill-icon" />
            <h3>Backend & Databases</h3>
            <ul>
              <li>MongoDB</li>
              <li>PostgreSQL</li>
              <li>Express</li>
              <li>Node.js</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;