import React, { useState } from "react";
import TechCard from "../components/TechCard/TechCard";

const TechStack = () => {
  const [search, setSearch] = useState("");
  const [stack, setStack] = useState([
    {
      programming_language: "Python",
      logo: "https://www.sketchappsources.com/resources/source-image/python-logo.png", // Replace with an actual logo if needed
      experience: "Intermediate",
    },
    {
      programming_language: "JavaScript",
      logo: "js", // Replace with an actual logo if needed
      experience: "Advanced",
    },
    {
      programming_language: "Go",
      logo: "go", // Replace with an actual logo if needed
      experience: "Beginner",
    },
    // Add more tech stack objects as needed
  ]);

  // Filter stack based on the search query
  const filteredStack = stack.filter((item) =>
    item.programming_language.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="Home bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <div className="browser-window">
        <div className="address-bar">
          <span>www.techstack.com</span>
        </div>
        <div className="window-content">
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search by tech..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="search-input"
            />
          </div>
          <div className="browser-content">
            <div className="grid grid-cols-3 gap-4">
              {filteredStack.map((item, index) => (
                <TechCard stack={item} key={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
