import React, { useState } from 'react';
import { FaEnvelope, FaGithub } from 'react-icons/fa';

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
    <section id="contact">
      <h2>Contact</h2>
      <div className="contact-info">
        <div className="contact-item">
          <FaEnvelope size={24} />
          <a href="mailto:Colorado.jhernandez@gmail.com" className="contact-link">Colorado.JHernandez@gmail.com</a>
        </div>
        <div className="contact-item">
          <FaGithub size={24} />
          <a href="https://github.com/mountainmancodes" target="_blank" rel="noopener noreferrer" className="contact-link">
            github.com/mountainmancodes
          </a>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            aria-describedby={emailError ? 'email-error' : undefined}
          />
          {emailError && <p id="email-error" className="error">{emailError}</p>}
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        <button type="submit" aria-label="Send message">Send</button>
      </form>

      {/* Display success message after form submission */}
      {successMessage && <p className="success">{successMessage}</p>}
    </section>
  );
}

export default Contact;
