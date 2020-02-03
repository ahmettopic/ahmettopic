import React, { Component } from "react";
// React Router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// Route Components
import AppBar from "../components/AppBar/AppBar";
import About from "../components/About/About";
import SkillsList from "../components/Skills/SkillList";
import Portfolio from "../components/Portfolio/Portfolio";
import Blog from "../components/Blog/Blog";
// Styles
import "../styles/styles.css";

class Layout extends Component {
  render() {
    return (
      <Router>
        <div className="Layout">
          <Switch>
            <Route path="/about" component={About} />
            <Route path="/skills" component={SkillsList} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/blog" component={Blog} />
          </Switch>
        </div>
        <AppBar />
      </Router>
    );
  }
}

export default Layout;
