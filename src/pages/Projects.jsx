import React from 'react';
import './Projects.css';

const projects = [
  {
    id: 1,
    title: 'Portfolio 3D',
    description: 'Portfolio interactif avec animations Three.js',
    tech: ['React', 'Three.js', 'CSS'],
    link: '#'
  },
  {
    id: 2,
    title: 'App de recettes',
    description: 'Application de recettes de cuisine avec Node.js',
    tech: ['Next.js', 'Node.js', 'MongoDB'],
    link: '#'
  },
  {
    id: 3,
    title: 'Dashboard',
    description: 'Dashboard analytique responsive',
    tech: ['React', 'Chart.js', 'API'],
    link: '#'
  }
];

const Projects = () => {
  return (
    <div className="projects">
      <div className="projects-container">
        <h1>Mes <span>Projets</span></h1>
        <div className="projects-grid">
          {projects.map(project => (
            <div className="project-card" key={project.id}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech-stack">
                {project.tech.map((t, i) => (
                  <span key={i} className="tech-badge">{t}</span>
                ))}
              </div>
              <a href={project.link} className="project-link">Voir le projet →</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;