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
        console.log('API URL:', import.meta.env.VITE_GITHUB_API_URL);

        // Fetch the repositories using the environment variable
        const response = await fetch(`${import.meta.env.VITE_GITHUB_API_URL}/users/Mountainmancodes/repos`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch repositories');
        }

        const repos = await response.json();

        // Function to fetch README for each repository
        const fetchReadme = async (repoName) => {
          const readmeResponse = await fetch(
            `${import.meta.env.VITE_GITHUB_API_URL}/repos/Mountainmancodes/${repoName}/readme`,
            { headers: { Accept: 'application/vnd.github.v3.raw' } }
          );
          if (!readmeResponse.ok) {
            return null;
          }
          const readmeContent = await readmeResponse.text();
          
          // Use a regex to extract the first image from the markdown
          const imageMatch = readmeContent.match(/!\[.*?\]\((.*?)\)/);

          if (imageMatch) {
            // Ensure that the image URL is absolute
            let imageUrl = imageMatch[1];
            if (!imageUrl.startsWith('http')) {
              imageUrl = `https://raw.githubusercontent.com/Mountainmancodes/${repoName}/main/${imageUrl}`;
            }
            return imageUrl;
          }

          return null;
        };

        // Fetch README images for all repositories
        const projectsWithImages = await Promise.all(
          repos.map(async (repo) => {
            const imageUrl = await fetchReadme(repo.name);
            return {
              ...repo,
              imageUrl: imageUrl || '/assets/images/placeholder.png', // Fallback to placeholder if no image found
            };
          })
        );

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
            description={project.description || 'No description available'}
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
