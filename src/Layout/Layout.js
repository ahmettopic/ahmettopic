import React, { Component } from "react";
// Route Components
import Welcome from "../components/Welcome/Welcome";
import Background from "../components/Background/Background";
import Skills from "../components/Skills/Skills";
// Components
// import withErrorHandler from "../withErrorHandler/withErrorHandler";

class Layout extends Component {
  render() {
    return (
      <div className="Layout">
        <Welcome name="Ahmet Topic">Fullstack Web Developer</Welcome>
        <Background />
        <Skills />
      </div>
    );
  }
}

// export default withErrorHandler(Layout);
export default Layout;
