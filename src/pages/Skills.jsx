import React, { useEffect, useRef } from 'react';
import './Skills.css';

const skills = [
  { name: 'React', level: 85 },
  { name: 'JavaScript', level: 90 },
  { name: 'Node.js', level: 75 },
  { name: 'Three.js', level: 60 },
  { name: 'CSS / SASS', level: 80 },
  { name: 'IT Support', level: 90 },
];

const Skills = () => {
  const fillRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.width = entry.target.dataset.level + '%';
          }
        });
      },
      { threshold: 0.3 }
    );
    fillRefs.current.forEach((el) => {
      if (el) { el.style.width = '0%'; observer.observe(el); }
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="skills">
      <div className="skills-container">
        <div className="section-label">Expertise</div>
        <h1>My <span>Skills</span></h1>
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
                  data-level={skill.level}
                  ref={(el) => (fillRefs.current[index] = el)}
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