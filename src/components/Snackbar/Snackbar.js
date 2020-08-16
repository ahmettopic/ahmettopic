import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// Material Grid
import Grid from '@material-ui/core/Grid';
// Styled Components
import { FiLogIn } from 'react-icons/fi';
class SnackBar extends Component {
  dashBoard = () => {
    console.log('DASHBOARD');
  };

  render() {
    return (
      <div
        style={{
          backgroundColor: '#dd4444',
          height: '8vh',
          display: 'flex',
          alignItems: 'center',
          textAlign: 'right',
        }}
      >
        <Grid container direction="row">
          <Grid item xs={12}>
            <Link to="/dashboard">
              <FiLogIn
                size={30}
                color={'white'}
                style={{ margin: '15px' }}
                onClick={this.loginClick}
              />
            </Link>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default SnackBar;
