import React, { Component } from 'react';
// Material Grid
import Grid from '@material-ui/core/Grid';

class Contact extends Component {
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
            <p>Contact</p>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Contact;
