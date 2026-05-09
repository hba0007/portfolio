import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about">
      <div className="about-container">
        <div className="about-grid">
          <div className="about-visual">
            <span className="about-visual-monogram">H:B</span>
          </div>
          <div className="about-text-side">
            <div className="section-label">Who am I</div>
            <h1>About<br /><span>me</span></h1>
            <div className="about-text">
              <p>I am an IT Technician passionate about technology and artificial intelligence. I aim to understand and create AI-driven content while continuing to grow as a web developer.</p>
              <p>I enjoy building modern web applications and exploring the possibilities that AI offers for the future of development.</p>
            </div>
            <div className="about-info">
              <div className="info-item">
                <span className="label">Name</span>
                <span className="value">Hamid Bouaicha</span>
              </div>
              <div className="info-item">
                <span className="label">Email</span>
                <span className="value">hbo711772@gmail.com</span>
              </div>
              <div className="info-item">
                <span className="label">Location</span>
                <span className="value">Orleans, France</span>
              </div>
            </div>
            <a href="/projects" className="btn-about">View my projects</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;