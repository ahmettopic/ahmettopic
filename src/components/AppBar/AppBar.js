// React
import React from "react";
import { Link } from "react-router-dom";
// Styles
import "../../styles/styles.css";

function AppBar() {
  return (
    <React.Fragment>
      <div className="AppBar">
        {/* Background */}
        <Link to="/background">
          <p>Background</p>
        </Link>
        {/* Skills */}
        <Link to="/skills">
          <p>Skills</p>
        </Link>
        {/* Experience */}
        <Link to="/experience">
          <p>Experience</p>
        </Link>
        {/* Projects */}
        <Link to="/projects">
          <p>Projects</p>
        </Link>
      </div>
    </React.Fragment>
  );
}

export default AppBar;
