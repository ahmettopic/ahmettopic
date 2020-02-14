import React from 'react';
// Material Grid
import Grid from '@material-ui/core/Grid';
// Styled Components
import StyledParagraph from '../../styles/StyledParagraph';
// Components
import Auth from '../../containers/Auth/Auth';

const contact = props => (
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
        <StyledParagraph style={{ textAlign: 'center' }}>
          Please Login or Sign Up to continue!
        </StyledParagraph>
        <Auth />
        <StyledParagraph style={{ textAlign: 'center' }}>
          By signing up, you accept the Privacy Policy
        </StyledParagraph>
      </Grid>
    </Grid>
  </div>
);

export default contact;
