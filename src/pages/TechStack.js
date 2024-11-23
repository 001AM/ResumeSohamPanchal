import React, { useState } from "react";

const TechStack = () => {
  const [activeSection, setActiveSection] = useState(null); // Tracks active section

  const stack = [
    {
      section: "Programming Languages",
      items: [
        { skill: "Python", level: "Intermediate", experience: "1 Year" },
        { skill: "JavaScript", level: "Intermediate", experience: "1 Year" },
      ],
    },
    {
      section: "Libraries & Frameworks",
      items: [
        { skill: "Django", level: "Intermediate", experience: "1 Year" },
        { skill: "React", level: "Beginner", experience: "6 Months" },
      ],
    },
    {
      section: "Tools & Technologies",
      items: [
        { skill: "AWS Lambda", level: "Intermediate", experience: "1 Year" },
        { skill: "AWS S3 Bucket", level: "Intermediate", experience: "1 Year" },
        { skill: "Docker", level: "Beginner", experience: "6 Months" },
        { skill: "CI/CD", level: "Beginner", experience: "6 Months" },
        { skill: "Git", level: "Intermediate", experience: "2 Years" },
        { skill: "Postman", level: "Expert", experience: "2 Years" },
        { skill: "Vscode", level: "Expert", experience: "2 Years" },
      ],
    },
    {
      section: "Soft Skills",
      items: [
        { skill: "Communication", level: "Excellent" },
        { skill: "Team Collaboration", level: "Excellent" },
        { skill: "Problem-Solving", level: "Excellent" },
      ],
    },
  ];

  return (
    <div className="Home bg-gray-100 min-h-screen flex flex-col p-4">
      {/* Home Button */}
      <div className="flex justify-start items-center mb-4">
        <a
          href="/ResumeSohamPanchal"
          className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-blue-600 hover:text-blue-800 transition-all"
        >
          ← Back to Home
        </a>
      </div>

      {/* Section List */}
      <div className="section">
        {stack.map((section, index) => (
          <div
            key={index}
            className="flex flex-col gap-2 border-b-2 border-black mb-4"
          >
            {/* Section Header */}
            <div
              className="cursor-pointer p-2 font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl flex items-center gap-2"
              onClick={() => setActiveSection(activeSection === index ? null : index)}
            >
              <img
                src="https://www.svgrepo.com/show/238230/diagonal-arrow.svg"
                alt="arrow-head"
                className="h-5 w-5 sm:h-6 sm:w-6 ml-2 mr-4"
              />
              {section.section}
            </div>

            {/* Render items if the section is active */}
            {activeSection === index && (
              <div
                className="bg-gray-200 max-h-64 sm:max-h-80 md:max-h-96 overflow-y-auto border border-gray-300 rounded-md shadow-md"
              >
                {section.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 flex flex-col gap-2 border-b border-gray-300"
                  >
                    <div className="text-lg sm:text-xl md:text-2xl font-sans font-bold">
                      {item.skill}
                    </div>
                    {item.experience && (
                      <div className="text-sm sm:text-base md:text-lg font-sans font-medium text-gray-700">
                        EXPERIENCE: {item.experience}
                      </div>
                    )}
                    <div className="text-sm sm:text-base md:text-lg font-sans font-medium text-gray-700">
                      Level: {item.level}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
