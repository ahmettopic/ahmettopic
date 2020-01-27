import React from "react";
// CSS
import "../../styles/styles.css";

const welcome = props => {
  return (
    <React.Fragment>
      <div className="Welcome">
        <div>
          <h1>{props.name}</h1>
          <p>{props.children}</p>
        </div>
      </div>
      <div className="Icons">
        <p>LinkedIn</p>
        <p>GitHub</p>
      </div>
    </React.Fragment>
  );
};

export default welcome;
