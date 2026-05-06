import React from 'react';
import ThreeScene from '../components/ThreeScene/ThreeScene';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <ThreeScene />
      <div className="home-content">
        <h1>Bonjour, je suis <span>Macbook</span></h1>
        <p>Développeur web passionné par la création d'applications modernes.</p>
        <a href="/projects" className="btn">Voir mes projets</a>
      </div>
    </div>
  );
};

export default Home;