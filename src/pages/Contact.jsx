import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent! Thank you ' + form.name);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact">
      <div className="contact-container">
        <div className="contact-left">
          <div className="section-label">Let us work</div>
          <h1>Together<br /><span>create</span></h1>
          <p className="contact-subtitle">Have a project in mind? I am available for new opportunities.</p>
          <div className="contact-socials">
            <a href="#" className="social-link">LinkedIn</a>
            <a href="#" className="social-link">GitHub</a>
            <a href="#" className="social-link">Dribbble</a>
          </div>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input type="text" name="name" placeholder="Your name" value={form.name} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <input type="email" name="email" placeholder="Your email" value={form.email} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <textarea name="message" placeholder="Your message" rows="5" value={form.message} onChange={handleChange} required />
          </div>
          <button type="submit" className="btn-submit">Send →</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;