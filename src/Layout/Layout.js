import React, { Component } from "react";
// React Router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// Route Components
import AppBar from "../components/AppBar/AppBar";
import About from "../components/About/About";
import Skills from "../components/Skills/Skills";
import Portfolio from "../components/Portfolio/Portfolio";
import Blog from "../components/Blog/Blog";
// Material UI
// Material UI
import Grid from "@material-ui/core/Grid";
// Styles
import "../styles/styles.css";

class Layout extends Component {
  render() {
    return (
      <Router>
        <div className="Layout">
          <Grid container>
            <Switch>
              <Route path="/about" component={About} />
              <Route path="/skills" component={Skills} />
              <Route path="/portfolio" component={Portfolio} />
              <Route path="/blog" component={Blog} />
            </Switch>
          </Grid>
        </div>
        <AppBar />
      </Router>
    );
  }
}

// export default withErrorHandler(Layout);
export default Layout;
