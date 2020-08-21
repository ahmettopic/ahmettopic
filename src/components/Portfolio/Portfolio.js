import React, { Component } from 'react';
import PortfolioData from './PortfolioData';
// Material Grid
import Grid from '@material-ui/core/Grid';

class Portfolio extends Component {
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
            <PortfolioData />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Portfolio;
