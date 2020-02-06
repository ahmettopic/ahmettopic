import React, { Component, lazy, Suspense } from "react";
// React Router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// Route Components
import About from "./components/About/About";
import SkillsList from "./components/Skills/SkillList";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
// Material Grid
import Grid from "@material-ui/core/Grid";
// Components
import SnackBar from "./components/SnackBar/Snackbar";
import AppBar from "./components/AppBar/AppBar";
// Styled Components
import GlobalStyle from "./styles/GlobalStyle";
// Loader
import Spinner from "./components/Spinner/Spinner";
// LazyLoad
const Welcome = lazy(() => import("./components/Welcome/Welcome"));

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <GlobalStyle />
        <SnackBar />
        <Grid container spacing={0} justify="center">
          <Grid item xs={12} md={4}>
            <Suspense fallback={<Spinner />}>
              <Welcome />
            </Suspense>
            <Router>
              <AppBar />
              <div style={{}}>
                <Switch>
                  <Route path="/about" component={About} />
                  <Route path="/skills" component={SkillsList} />
                  <Route path="/portfolio" component={Portfolio} />
                  <Route path="/contact" component={Contact} />
                </Switch>
              </div>
            </Router>
          </Grid>
          <Grid item xs={12} md={3}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                textAlign: "center",
                justifyContent: "center",
                height: "75vh",
                backgroundColor: "#f7f7f7"
              }}
            >
              hej
            </div>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}
export default App;
