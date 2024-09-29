import React, { useEffect, useState } from 'react';
import Project from './Project';
import projectImages from '../data/projectImages';

function Portfolio() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch('https://api.github.com/users/mountainmancodes/repos');
        const data = await response.json();
        
        // Combine GitHub data with local image data
        const projectsWithImages = data.map(repo => ({
          ...repo,
          imageUrl: projectImages[repo.name] || '/images/placeholder.png'
        }));
        
        setProjects(projectsWithImages);
      } catch (error) {
        console.error('Error fetching repos:', error);
      }
    };

    fetchRepos();
  }, []);

  return (
    <section id="portfolio">
      <h2>My Portfolio</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <Project 
            key={project.id}
            name={project.name}
            description={project.description}
            imageUrl={project.imageUrl}
            repoUrl={project.html_url}
            deployedUrl={project.homepage}
          />
        ))}
      </div>
    </section>
  );
}

export default Portfolio;