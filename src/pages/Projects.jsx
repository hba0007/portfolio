import React from 'react';
import './Projects.css';

const projects = [
  {
    id: 1,
    title: '3D Portfolio',
    description: 'Interactive portfolio with Three.js particle animations and modern UI design.',
    tech: ['React', 'Three.js', 'CSS'],
    link: '#'
  },
  {
    id: 2,
    title: 'P3 Cars Story',
    description: 'Full-stack web app about the life cycle of cars. Features car comparisons, sports cars, tuning details, security info and a live chat. Built as a team project at Wild Code School.',
    tech: ['React', 'Node.js', 'MySQL', 'CSS'],
    link: 'https://github.com/WildCodeSchool-2024-02/JS-RemoteFR-Gridception-P3-Cars-Story'
  },
  {
    id: 3,
    title: 'Coming Soon — AI Project',
    description: 'A new AI-driven project currently in development. Exploring machine learning and AI content generation.',
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
            <a href={project.link} className="project-row" key={project.id} target="_blank" rel="noopener noreferrer">
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