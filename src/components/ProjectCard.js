import React from "react";
import { FaStar, FaCodeBranch } from "react-icons/fa";
import "./ProjectCard.css";

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <h3>{project.name}</h3>
      <p>{project.description}</p>
      <div className="project-meta">
        <span
          className="project-language"
          style={{
            backgroundColor: project.language
              ? getLanguageColor(project.language)
              : "#000",
          }}
        >
          {project.language}
        </span>
        <div className="project-stats">
          <span className="project-stars">
            <FaStar /> {project.stargazers_count}
          </span>
          <span className="project-forks">
            <FaCodeBranch /> {project.forks_count}
          </span>
        </div>
      </div>
    </div>
  );
};

const getLanguageColor = (language) => {
  const colors = {
    JavaScript: "#f1e05a",
    HTML: "#e34c26",
    CSS: "#563d7c",
    PHP: "#4F5D95",
    Java: "#b07219",
    "C#": "#178600",
    // Add more languages and their colors as needed
  };
  return colors[language] || "#000"; // Default color is black
};

export default ProjectCard;
