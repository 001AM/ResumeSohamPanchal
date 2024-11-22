import React from "react";
import "../TechCard/TechCard.css";

const TechCard = ({ stack }) => {
  return (
    <section className="tech-card">
      <div className="tech-card-content">
        <div className="tech-card-logo-container">
          <img
            src={stack.logo} // Replace with actual logo path
            alt={stack.programming_language}
            className="tech-card-logo"
          />
        </div>
        <div className="tech-card-title">{stack.programming_language}</div>
        <div className="tech-card-experience">{stack.experience}</div>
      </div>
    </section>
  );
};

export default TechCard;
