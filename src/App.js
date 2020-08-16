import React, { Component, lazy, Suspense } from 'react';
// React Router
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// Route Components
import { AuthProvider } from './Auth';
import PrivateRoute from './PrivateRoute';
import About from './components/About/About';
import SkillsList from './components/Skills/SkillList';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';
// Material Grid
import Grid from '@material-ui/core/Grid';
// Components
import SnackBar from './components/SnackBar/Snackbar';
import AppBar from './components/AppBar/AppBar';
// Styled Components
import GlobalStyle from './styles/GlobalStyle';
// Media
// import profilepicture from './assets/profilepicture.png';
// Loader
import Spinner from './components/Spinner/Spinner';
// LazyLoad
const Welcome = lazy(() => import('./components/Welcome/Welcome'));

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <GlobalStyle />
        <Grid container spacing={0} justify="center">
          <Grid item xs={12} md={4}>
            <Router>
              <SnackBar />
              <Suspense fallback={<Spinner />}>
                <Welcome />
                <AppBar />
              </Suspense>

              <div style={{}}>
                <Switch>
                  <Route path="/about" component={About} />
                  <Route path="/skills" component={SkillsList} />
                  <Route path="/portfolio" component={Portfolio} />
                  <Route path="/contact" component={Contact} />
                  <AuthProvider>
                    <Route exact path="/login" component={Login} />
                    <PrivateRoute path="/dashboard" component={Dashboard} />
                  </AuthProvider>
                </Switch>
              </div>
            </Router>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}
export default App;
