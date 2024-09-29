import React from 'react';
import PropTypes from 'prop-types';

function Project({ name, description, imageUrl, repoUrl, deployedUrl }) {
  // Fallback to placeholder image if no imageUrl is provided
  const defaultImage = '/images/placeholder.png';

  return (
    <div className="project-card">
      <img
        src={imageUrl || defaultImage}
        alt={imageUrl ? `${name} screenshot` : `${name} placeholder image`}
        className="project-image"
      />
      <div className="project-info">
        <h3>{name}</h3>
        <p>{description || 'No description available'}</p>
        <div className="project-links">
          <a href={repoUrl} target="_blank" rel="noopener noreferrer" className="btn" aria-label={`GitHub repository for ${name}`}>
            GitHub Repo
          </a>
          {deployedUrl && (
            <a href={deployedUrl} target="_blank" rel="noopener noreferrer" className="btn" aria-label={`Deployed app for ${name}`}>
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
  deployedUrl: PropTypes.string,
};

export default Project;
