import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// Material Grid
import Grid from '@material-ui/core/Grid';
// Styled Components
import StyledParagraph from '../../styles/StyledParagraph';

class SnackBar extends Component {
  dashBoard = () => {
    console.log('DASHBOARD');
  };

  render() {
    return (
      <div
        style={{
          backgroundColor: '#dd4444',
          height: '5vh',
          display: 'flex',
          alignItems: 'center',
          textAlign: 'right',
        }}
      >
        <Grid container direction="row">
          <Grid item xs={12}>
            <Link to="/dashboard">
              <StyledParagraph
                style={{ margin: '10px' }}
                onClick={this.loginClick}
              >
                DASHBOARD
              </StyledParagraph>
            </Link>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default SnackBar;
