import React, { Component } from 'react';
import PortfolioData from '../Portfolio/PortfolioData';
// Material Grid
import Grid from '@material-ui/core/Grid';
// Firebase
import firebaseConfig from '../../config/firebaseConfig';

class Dashboard extends Component {
  render() {
    return (
      <React.Fragment>
        <div
          style={{
            padding: '1em',
            display: 'flex',
            alignItems: 'center',
            textAlign: 'center',
            justifyContent: 'center',
          }}
        >
          <Grid container justify="center">
            <button onClick={() => firebaseConfig.auth().signOut()}>
              SIGN OUT
            </button>
            <Grid item xs={12}>
              <PortfolioData />
            </Grid>
          </Grid>
        </div>
      </React.Fragment>
    );
  }
}

export default Dashboard;
