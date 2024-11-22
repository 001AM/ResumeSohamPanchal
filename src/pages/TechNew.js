import React, { useState } from "react";
// import TechCard from "../components/TechCard/TechCard";

const TechNew = () => {
  // const [search, setSearch] = useState("");
  const stack = [
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
  ];

  // Filter stack based on the search query
  // const filteredStack = stack.filter((item) =>
  //   item.programming_language.toLowerCase().includes(search.toLowerCase()),
  // );

  return (
    <div className="Home bg-gray-100 min-h-screen flex flex-col items-center justify-center"></div>
  );
};

export default TechNew;
