import React from 'react';

const ProjectCard = ({ project }) => {
  return (
    <div className="card h-100 shadow-sm">
      <img 
        src={project.image} 
        className="card-img-top" 
        alt={project.title}
        style={{ height: '200px', objectFit: 'cover' }}
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{project.title}</h5>
        <p className="card-text flex-grow-1">{project.description}</p>
        <div className="mb-3">
          {project.tech.map((tech, idx) => (
            <span key={idx} className="badge bg-secondary me-1 mb-1">
              {tech}
            </span>
          ))}
        </div>
        <a 
          href={project.liveLink} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn btn-primary mt-auto"
        >
          View Project
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;