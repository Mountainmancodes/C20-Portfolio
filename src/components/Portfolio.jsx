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

        // Fetch the repositories using the environment variable and authentication token
        const response = await fetch(`${import.meta.env.VITE_GITHUB_API_URL}/users/Mountainmancodes/repos`, {
          headers: {
            Authorization: `token ${import.meta.env.VITE_GITHUB_ACCESS_TOKEN}`, // Use token from .env
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch repositories');
        }

        const repos = await response.json();

        // Function to fetch README and extract image and description
        const fetchReadme = async (repoName) => {
          const readmeResponse = await fetch(
            `${import.meta.env.VITE_GITHUB_API_URL}/repos/Mountainmancodes/${repoName}/readme`,
            {
              headers: {
                Accept: 'application/vnd.github.v3.raw',
                Authorization: `token ${import.meta.env.VITE_GITHUB_ACCESS_TOKEN}`, // Use token for README fetch too
              },
            }
          );
          if (!readmeResponse.ok) {
            return { imageUrl: null, description: null };
          }

          const readmeContent = await readmeResponse.text();

          // Use a regex to extract the first image from the markdown
          const imageMatch = readmeContent.match(/!\[.*?\]\((.*?)\)/);

          let imageUrl = imageMatch ? imageMatch[1] : null;
          if (imageUrl && !imageUrl.startsWith('http')) {
            imageUrl = `https://raw.githubusercontent.com/Mountainmancodes/${repoName}/main/${imageUrl}`;
          }

          // Extract the first paragraph or heading for description
          const descriptionMatch = readmeContent.match(/(?:^|\n)(?!#)([^\n#]+)(?:\n|$)/);
          const description = descriptionMatch ? descriptionMatch[1].trim() : 'No description available';

          return { imageUrl, description };
        };

        // Fetch README images and descriptions for all repositories
        const projectsWithDetails = await Promise.all(
          repos.map(async (repo) => {
            const { imageUrl, description } = await fetchReadme(repo.name);
            return {
              ...repo,
              imageUrl: imageUrl || '/assets/images/placeholder.png', // Fallback to placeholder if no image found
              description: description || 'No description available', // Fallback if no description found
            };
          })
        );

        setProjects(projectsWithDetails);
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
