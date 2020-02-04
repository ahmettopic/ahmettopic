import React, { Component } from "react";
// React Router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// Components
import SnackBar from "../components/SnackBar/Snackbar";
import Welcome from "../components/Welcome/Welcome";
import AppBar from "../components/AppBar/AppBar";
// Route Components
import About from "../components/About/About";
import SkillsList from "../components/Skills/SkillList";
import Portfolio from "../components/Portfolio/Portfolio";
import Contact from "../components/Contact/Contact";

// Styled Components
import StyledDiv from "../styles/StyledDiv";

class Layout extends Component {
  render() {
    return (
      <Router>
        <SnackBar />
        <Welcome />
        <StyledDiv style={{ height: "60vh" }}>
          <Switch>
            <Route path="/about" component={About} />
            <Route path="/skills" component={SkillsList} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </StyledDiv>
        <AppBar />
      </Router>
    );
  }
}

export default Layout;
