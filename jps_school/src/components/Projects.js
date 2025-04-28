import React from 'react';

const Projects = () => {
  const projects = [
    { name: 'Project One', description: 'Description of project one.', link: '#' },
    { name: 'Project Two', description: 'Description of project two.', link: '#' },
    { name: 'Project Three', description: 'Description of project three.', link: '#' },
  ];

  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
