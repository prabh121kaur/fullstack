import React, { useEffect, useState } from 'react';
import ProjectCard from './ProjectCard';


const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch projects from API
    fetch('https://assignment1fullstack-9.onrender.com/projects')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setProjects(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  return (
    <section className="projects">
      <h2>My Projects</h2>
      {loading && <p>Loading projects...</p>}
      {error && <p>Error: {error}</p>}
      {!loading && !error && (
        projects.length > 0 ? (
          projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))
        ) : (
          <p>No projects found.</p>
        )
      )}
    </section>
  );
};

export default Projects;
