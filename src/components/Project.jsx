import React from 'react';
import PropTypes from 'prop-types';

function Project({ name, description, imageUrl, repoUrl, deployedUrl }) {
  return (
    <div className="project-card">
      <img
        src={imageUrl}
        alt={`${name} screenshot`} 
        className="project-image"
      />
      <div className="project-info">
        <h3>{name}</h3>
        <p>{description}</p>
        <div className="project-links">
          <a href={repoUrl} target="_blank" rel="noopener noreferrer" className="btn">
            GitHub Repo
          </a>
          {deployedUrl && (
            <a href={deployedUrl} target="_blank" rel="noopener noreferrer" className="btn">
              Deployed App
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

Project.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  imageUrl: PropTypes.string.isRequired,
  repoUrl: PropTypes.string.isRequired,
  deployedUrl: PropTypes.string
};

export default Project;