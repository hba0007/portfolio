import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Message envoyé ! Merci ${form.name}`);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact">
      <div className="contact-container">
        <h1>Me <span>Contacter</span></h1>
        <p className="contact-subtitle">Tu as un projet ? Parlons-en !</p>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Ton nom"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Ton email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <textarea
              name="message"
              placeholder="Ton message"
              rows="6"
              value={form.message}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="btn-submit">Envoyer →</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;