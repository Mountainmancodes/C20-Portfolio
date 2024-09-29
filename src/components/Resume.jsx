import React from 'react';
import { FaDownload } from 'react-icons/fa';

function Resume() {
  const handleResumeClick = () => {
    window.open('./assets/images/IT Systems Analyst Associate Resume.pdf', '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="resume" className="resume-section">
      <div className="resume-content">
        <h2>Resume</h2>
        <div className="download-resume">
          <button className="resume-button" onClick={handleResumeClick}>
            <FaDownload /> Download Resume
          </button>
        </div>
        <div className="skills">
          <div className="skill-category">
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
            <h3>Programming Languages</h3>
            <ul>
              <li>TypeScript</li>
              <li>JavaScript</li>
            </ul>
          </div>
          <div className="skill-category">
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