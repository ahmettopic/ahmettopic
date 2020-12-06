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
        <div>
        <button onClick={() => firebaseConfig.auth().signOut()}>
              SIGN OUT
            </button>
        </div>
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

            <Grid item xs={5}>
              <PortfolioData />
            </Grid>
          </Grid>
        </div>
      </React.Fragment>
    );
  }
}

export default Dashboard;
