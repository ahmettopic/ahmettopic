import React from "react";
// CSS
import "./Welcome.css";

const welcome = props => {
  return (
    <div className="Welcome">
      <h1>{props.name}</h1>
      <p>{props.children}</p>
    </div>
  );
};

export default welcome;
