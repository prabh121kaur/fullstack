import React from 'react';

function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <img src={`assets/${project.screenshot}`} alt={project.name} />
      <h3>{project.name}</h3>
      <p>{project.description}</p>
      <a href={project.url} target="_blank" rel="noopener noreferrer">View Project</a>
      <ul>
        {project.languages.map((lang, index) => (
          <li key={index}>{lang}</li>
        ))}
      </ul>
    </div>
  );
}

export default ProjectCard;
