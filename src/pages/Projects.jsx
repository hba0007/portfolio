import React from 'react';
import './Projects.css';

const projects = [
  {
    id: 1,
    title: '3D Portfolio',
    description: 'Interactive portfolio with Three.js animations and particle effects.',
    tech: ['React', 'Three.js', 'CSS'],
    link: '#'
  },
  {
    id: 2,
    title: 'P3 Cars Story',
    description: 'A web application about cars, built as a team project.',
    tech: ['JavaScript', 'HTML', 'CSS'],
    link: '#'
  },
  {
    id: 3,
    title: 'Coming Soon',
    description: 'A new AI-driven project currently in development.',
    tech: ['Python', 'AI', 'React'],
    link: '#'
  }
];

const Projects = () => {
  return (
    <div className="projects">
      <div className="projects-container">
        <div className="section-label">Work</div>
        <h1>My <span>Projects</span></h1>
        <div className="projects-list">
          {projects.map((project, index) => (
            <a href={project.link} className="project-row" key={project.id}>
              <span className="project-num">{String(index + 1).padStart(2, '0')}</span>
              <div className="project-body">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tech-stack">
                  {project.tech.map((t, i) => (
                    <span key={i} className="tech-badge">{t}</span>
                  ))}
                </div>
              </div>
              <span className="project-arrow">↗</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;