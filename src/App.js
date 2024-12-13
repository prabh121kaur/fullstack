import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ProjectCard from './components/ProjectCard';
import Projects from './components/Projects';
import Skills from './components/Skills';
import './App.css';

function App() {
  // State for projects
  const [projects, setProjects] = useState([]);
  const [loadingProjects, setLoadingProjects] = useState(true);
  const [errorProjects, setErrorProjects] = useState(null);

  // State for skills
  const [skills, setSkills] = useState([]);
  const [loadingSkills, setLoadingSkills] = useState(true);
  const [errorSkills, setErrorSkills] = useState(null);

  // Fetch Projects
  useEffect(() => {
    fetch('https://assignment1fullstack-9.onrender.com/projects')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setProjects(data);
        setLoadingProjects(false);
      })
      .catch((error) => {
        setErrorProjects(error.message);
        setLoadingProjects(false);
      });
  }, []);

  // Fetch Skills
  useEffect(() => {
    fetch('https://assignment1fullstack-9.onrender.com/projects/skills')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setSkills(data);
        setLoadingSkills(false);
      })
      .catch((error) => {
        setErrorSkills(error.message);
        setLoadingSkills(false);
      });
  }, []);

  return (
    <div className="App">
      <Header />
      <main>
        <h1>Welcome to My Portfolio</h1>

        {/* Projects Section */}
        <section className="projects">
          <h2>My Projects</h2>
          {loadingProjects && <p>Loading projects...</p>}
          {errorProjects && <p>Error: {errorProjects}</p>}
          {!loadingProjects && !errorProjects && (
            projects.length > 0 ? (
              projects.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))
            ) : (
              <p>No projects found.</p>
            )
          )}
        </section>

        {/* Skills Section */}
        <section className="skills">
          <h2>My Skills</h2>
          {loadingSkills && <p>Loading skills...</p>}
          {errorSkills && <p>Error: {errorSkills}</p>}
          {!loadingSkills && !errorSkills && (
            skills.length > 0 ? (
              <ul>
                {skills.map((skill, index) => (
                  <li key={index}>{skill.name}</li>
                ))}
              </ul>
            ) : (
              <p>No skills found.</p>
            )
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
