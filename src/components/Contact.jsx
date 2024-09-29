import React, { useState } from 'react';
import { FaEnvelope, FaGithub, FaPaperPlane } from 'react-icons/fa';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [emailError, setEmailError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address');
      return;
    }
    setEmailError('');
    console.log('Form submitted:', { name, email, message });
    
    setSuccessMessage('Thank you for your message! We will get back to you soon.');
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <section id="contact" className="contact-section">
      <h2>Get in Touch</h2>
      <div className="contact-container">
        <div className="contact-info">
          <h3>Contact Information</h3>
          <div className="contact-item">
            <FaEnvelope />
            <a href="mailto:Colorado.jhernandez@gmail.com">Colorado.JHernandez@gmail.com</a>
          </div>
          <div className="contact-item">
            <FaGithub />
            <a href="https://github.com/mountainmancodes" target="_blank" rel="noopener noreferrer">
              github.com/mountainmancodes
            </a>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="Your Name"
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Your Email"
              aria-describedby={emailError ? 'email-error' : undefined}
            />
            {emailError && <p id="email-error" className="error">{emailError}</p>}
          </div>
          <div className="form-group">
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              placeholder="Your Message"
            />
          </div>
          <button type="submit" className="submit-btn">
            <FaPaperPlane /> Send Message
          </button>
        </form>
      </div>
      {successMessage && <p className="success-message">{successMessage}</p>}
    </section>
  );
}

export default Contact;