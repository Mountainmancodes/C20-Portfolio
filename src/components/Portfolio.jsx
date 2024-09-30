import React, { useEffect, useState } from 'react';
import Project from './Project';
import { FaGithub, FaGlobe } from 'react-icons/fa';

function Portfolio() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        // Log the environment variable to verify it's being loaded correctly
        console.log('API URL:', import.meta.env.VITE_GITHUB_API_URL);

        // Fetch the repositories using the environment variable
        const response = await fetch(`${import.meta.env.VITE_GITHUB_API_URL}/users/Mountainmancodes/repos`);
        
        // Check if the response is not OK (like 404 or any error response)
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
