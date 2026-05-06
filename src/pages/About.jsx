import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about">
      <div className="about-container">
        <div className="about-text">
          <h1>À propos de <span>moi</span></h1>
          <p>Je suis un développeur web passionné par la création d'expériences digitales modernes et élégantes.</p>
          <p>J'aime travailler avec les dernières technologies comme React, Node.js et Three.js pour créer des applications web uniques.</p>
          <div className="about-info">
            <div className="info-item">
              <span className="label">Nom</span>
              <span className="value">Macbook</span>
            </div>
            <div className="info-item">
              <span className="label">Email</span>
              <span className="value">ton@email.com</span>
            </div>
            <div className="info-item">
              <span className="label">Localisation</span>
              <span className="value">France</span>
            </div>
          </div>
          <a href="/projects" className="btn-about">Voir mes projets</a>
        </div>
      </div>
    </div>
  );
};

export default About;