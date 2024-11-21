import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./Header.css";

const Header = () => {
  const [userData, setUserData] = useState(null); // To store user data
  const [loading, setLoading] = useState(true); // To track loading state

  useEffect(() => {
    // Fetch user data dynamically from GitHub API
    axios
      .get("https://api.github.com/users/001AM")
      .then((response) => {
        setUserData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
        setLoading(false);
      });
  }, []);

  // If loading, show a loading message or spinner
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <header className="header">
      <div className="profile-container">
        <img
          src={userData.avatar_url} // Dynamically set profile picture
          alt="Profile"
          className="profile-img"
        />
        <h1>{userData.name}</h1> {/* Dynamically set name */}
        <p>{userData.bio}</p> {/* Dynamically set bio */}
        <div className="social-icons">
          <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/soham-panchal-430956255/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
