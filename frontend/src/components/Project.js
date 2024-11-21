import React from "react";
import "./Project.css";
import ProjectCard from "./ProjectCard";

const Projects = ({ repositories, loading }) => {
  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <section className="projects">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {repositories.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
