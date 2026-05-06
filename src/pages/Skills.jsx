import React from 'react';
import './Skills.css';

const skills = [
  { name: 'React', level: 85 },
  { name: 'JavaScript', level: 90 },
  { name: 'Node.js', level: 75 },
  { name: 'Three.js', level: 60 },
  { name: 'CSS / SASS', level: 80 },
  { name: 'MongoDB', level: 65 },
];

const Skills = () => {
  return (
    <div className="skills">
      <div className="skills-container">
        <h1>Mes <span>Compétences</span></h1>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div className="skill-item" key={index}>
              <div className="skill-header">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-percent">{skill.level}%</span>
              </div>
              <div className="skill-bar">
                <div
                  className="skill-fill"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;