import React, { Component } from "react";
// Route Components
import Welcome from "../components/Welcome/Welcome";
import Background from "../components/Background/Background";
import Skills from "../components/Skills/Skills";
// Components
import withErrorHandler from "../withErrorHandler/withErrorHandler";
// Axios
import axios from "../axios-data";

axios.post("/data.json");

//
class Layout extends Component {
  state = {};

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

export default withErrorHandler(Layout);
