import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Project.css";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const [repositories, setRepositories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch the repositories dynamically
    axios
      .get("https://api.github.com/users/001AM/repos")
      .then((response) => {
        setRepositories(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data from GitHub:", error);
        setLoading(false);
      });
  }, []);
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
