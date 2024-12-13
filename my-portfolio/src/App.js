import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ProjectCard from './components/ProjectCard';
import './App.css';

function App() {
  const projects = [
    {
      name: "TaskMaster",
      description: "A task management tool with an interactive UI.",
      screenshot: "taskmaster.png",
      url: "https://example.com/taskmaster",
      languages: ["JavaScript", "React", "CSS"],
    },
    {
      name: "Infinite Button",
      description: "A fun web app featuring an endless loop of buttons.",
      screenshot: "infinite-button.png",
      url: "https://example.com/infinite-button",
      languages: ["HTML", "CSS", "JavaScript"],
    },
  ];

  return (
    <div className="App">
      <Header />
      <main>
        <h1>Welcome to My Portfolio</h1>
        <section className="projects">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
