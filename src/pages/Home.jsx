import React from 'react';
import ThreeScene from '../components/ThreeScene/ThreeScene';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <ThreeScene />
      <div className="home-content">
        <div className="home-label">IT Technician & Web Developer</div>
        <h1>Hello, I am<br /><span>Hamid Bouaicha</span></h1>
        <p>Passionate about technology and AI, I create modern digital experiences at the intersection of design and innovation.</p>
        <a href="/projects" className="btn">View my projects</a>
      </div>
      <div className="home-scroll">Scroll</div>
    </div>
  );
};

export default Home;