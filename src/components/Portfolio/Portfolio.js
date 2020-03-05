import React from 'react';
// Material Grid
import Grid from '@material-ui/core/Grid';
// Styled Components
import StyledParagraph from '../../styles/StyledParagraph';
import UserItem from './Users/UserItem';

const portfolio = props => (
  <div
    style={{
      padding: '1em',
      display: 'flex',
      alignItems: 'center',
      textAlign: 'center',
      justifyContent: 'center'
    }}
  >
    <Grid container justify="center">
      <Grid item xs={12}>
        <UserItem />
      </Grid>
    </Grid>
  </div>
);

export default portfolio;
