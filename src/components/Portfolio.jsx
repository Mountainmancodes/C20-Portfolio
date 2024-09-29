import React, { useEffect, useState } from 'react';
import Project from './Project';

function Portfolio() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_GITHUB_API_URL}/users/mountainmancodes/repos`);
        if (!response.ok) {
          throw new Error('Failed to fetch repositories');
        }
        const data = await response.json();
  
        // Use a placeholder image for all projects
        const projectsWithImages = data.map(repo => ({
          ...repo,
          imageUrl: '/assets/images/placeholder.png'
        }));
  
        setProjects(projectsWithImages);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching repos:', error);
        setError('Unable to load projects at the moment. Please try again later.');
        setLoading(false);
      }
    };
  
    fetchRepos();
  }, []);

  if (loading) {
    return <p>Loading projects...</p>;
  }

  if (error) {
    return (
      <div className="error-message">
        <p>{error}</p>
      </div>
    );
  }

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
