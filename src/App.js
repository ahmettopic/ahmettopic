import React, { Component } from "react";
// Components
import Layout from "./Layout/Layout";
import Welcome from "./components/Welcome/Welcome";

class App extends Component {
  render() {
    return (
      <div>
        <Welcome name="Ahmet Topic">
          <p>Fullstack Web Developer</p>
        </Welcome>
        <Layout />
      </div>
    );
  }
}

export default App;
