import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-content">
        <div className="profile-info">
          <img src="/assets/images/image.png" alt="Joshua Hernandez" className="avatar" />
          <h1 className="name">Joshua Hernandez</h1>
          <p className="title">Father | Software Engineer | Techno-Optimist</p>
        </div>
        
        <div className="bio">
          <h2>About Me</h2>
          <p>
            Hello! I'm Joshua Hernandez, a passionate software engineer with a love for creating 
            innovative solutions. As a father and a techno-optimist, I believe in the power of 
            technology to shape a better future for all of us.
          </p>
          <p>
            With expertise in both frontend and backend technologies, I enjoy building 
            full-stack applications that are not only functional but also user-friendly and 
            scalable. My experience spans across various technologies, including Angular, 
            React, Node.js, and database systems like MongoDB and PostgreSQL.
          </p>
          <p>
            When I'm not coding, you can find me exploring the latest tech trends, spending 
            quality time with my family, or contributing to open-source projects. I'm always 
            eager to take on new challenges and learn new technologies.
          </p>
        </div>
        
        <div className="contact-links">
          <a href="https://github.com/mountainmancodes" target="_blank" rel="noopener noreferrer">
            <FaGithub /> GitHub
          </a>
          <a href="https://www.linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer">
            <FaLinkedin /> LinkedIn
          </a>
          <a href="mailto:Colorado.jhernandez@gmail.com">
            <FaEnvelope /> Email
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;