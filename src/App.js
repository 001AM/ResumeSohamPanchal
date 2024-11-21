import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Use Routes instead of Switch
// import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Project";
import Footer from "./components/Footer";
import "./App.css"; // Add your global styles here
import "./index.css"; // Replace with your CSS file if named differently

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<></>} />
          {/* Define routes for different sections of your app */}
          <Route
            path="/home"
            element={
              <>
                <About />
              </>
            }
          />
          <Route
            path="/project"
            element={
              <>
                <About />
                <Projects />
              </>
            }
          />
          {/* Add any additional routes here if needed */}
          {/* For example, a route for an individual project page */}
          {/* <Route path="/project/:id" element={<ProjectDetail />} /> */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
