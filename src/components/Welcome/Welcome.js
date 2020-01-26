import React from "react";
// CSS
import "../../styles/styles.css";

const welcome = props => {
  return (
    <div className="Welcome">
      <div>
        <h1>{props.name}</h1>
        <p>{props.children}</p>
      </div>
    </div>
  );
};

export default welcome;
