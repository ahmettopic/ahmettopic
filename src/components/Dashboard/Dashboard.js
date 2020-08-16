import React, { Component } from 'react';
// Material Grid
import Grid from '@material-ui/core/Grid';
// Firebase
import firebaseConfig from '../../config/firebaseConfig';

class Dashboard extends Component {
  render() {
    return (
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
          <Grid item xs={12}>
            <p>Dashboard</p>
            <button onClick={() => firebaseConfig.auth().signOut()}>
              SIGN OUT
            </button>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Dashboard;
