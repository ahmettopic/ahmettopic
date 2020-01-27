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
        <Link to="/about">
          <p>About</p>
        </Link>
        {/* Skills */}
        <Link to="/skills">
          <p>Skills</p>
        </Link>
        {/* Experience */}
        <Link to="/portfolio">
          <p>Portfolio</p>
        </Link>
        {/* Blog */}
        <Link to="/blog">
          <p>Blog</p>
        </Link>
      </div>
    </React.Fragment>
  );
}

export default AppBar;
