import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Use Routes instead of Switch
// import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Project";
// import Footer from "./components/Footer";
import Home from "./pages/Home";
import "./App.css"; // Add your global styles here
import "./index.css"; // Replace with your CSS file if named differently
import TechStack from "./pages/TechStack";
import TechNew from "./pages/TechNew";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/ResumeSohamPanchal"
            element={
              <>
                <Home />
              </>
            }
          />
          <Route
            path="/ResumeSohamPanchal/tech-skills"
            element={
              <>
                <TechStack />
              </>
            }
          />
          {/* Define routes for different sections of your app */}
          <Route
            path="/ResumeSohamPanchal/home"
            element={
              <>
                <About />
              </>
            }
          />
          <Route
            path="/ResumeSohamPanchal/project"
            element={
              <>
                <About />
                <Projects />
              </>
            }
          />
          <Route
            path="/ResumeSohamPanchal/tech-skills-new"
            element={
              <>
                <TechNew />
              </>
            }
          />
          {/* Add any additional routes here if needed */}
          {/* For example, a route for an individual project page */}
          {/* <Route path="/project/:id" element={<ProjectDetail />} /> */}
        </Routes>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
