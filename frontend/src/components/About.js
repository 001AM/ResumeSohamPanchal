import React, { useState, useEffect } from "react";
import axios from "axios";
import "./About.css";

const About = () => {
  const [userData, setUserData] = useState(null); // Store user data
  const [loading, setLoading] = useState(true); // Track loading state

  useEffect(() => {
    // Fetch user data dynamically from GitHub API
    axios
      .get("https://api.github.com/users/001AM") // GitHub user API
      .then((response) => {
        setUserData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <section className="about">
      <h2>About Me</h2>
      <p>{userData.bio || "No bio available"}</p>
      <p>
        I'm a passionate software developer with a love for building scalable
        and efficient systems. Explore my projects and contributions on GitHub.
      </p>
    </section>
  );
};

export default About;
