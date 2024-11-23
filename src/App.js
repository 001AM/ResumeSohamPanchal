import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import "./index.css";
import TechStack from "./pages/TechStack";

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
        </Routes>
      </div>
    </Router>
  );
}

export default App;
