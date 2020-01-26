import React, { Component } from "react";
// React Router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// Route Components
import AppBar from "../components/AppBar/AppBar";
import Background from "../components/Background/Background";
import Skills from "../components/Skills/Skills";
import Experiance from "../components/Experience/Experience";
import Projects from "../components/Projects/Projects";
// Styles
import "../styles/styles.css";

class Layout extends Component {
  render() {
    return (
      <Router>
        <AppBar />
        <div className="Layout">
          <Switch>
            <Route path="/background" component={Background} />
            <Route path="/skills" component={Skills} />
            <Route path="/experience" component={Experiance} />
            <Route path="/projects" component={Projects} />
          </Switch>
        </div>
      </Router>
    );
  }
}

// export default withErrorHandler(Layout);
export default Layout;
