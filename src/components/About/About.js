import React, { Component } from 'react';
// Material Grid
import Grid from '@material-ui/core/Grid';
// JSON Data
import about from './about.json';
// Styled Components
import StyledParagraph from '../../styles/StyledParagraph';

class About extends Component {
  render() {
    const Emoji = (props) => (
      <span
        className="emoji"
        role="img"
        aria-label={props.label ? props.label : ''}
        aria-hidden={props.label ? 'false' : 'true'}
      >
        {props.symbol}
      </span>
    );
    return (
      <div
        style={{
          padding: '1em',
          display: 'flex',
          alignItems: 'center',
          textAlign: 'flex-start',
          fontSize: '18px',
        }}
      >
        <Grid container direction="row">
          <Grid item xs>
            {about.map((about, id) => {
              return (
                <React.Fragment key={id}>
                  <StyledParagraph>
                    {about.lead_1}
                    {about.lead_2}
                    <Emoji symbol="🔥" />
                    {about.lead_3}
                    <Emoji symbol="💅" />
                  </StyledParagraph>
                  <div style={{ marginTop: '1em', marginBottom: '3em' }}>
                    <StyledParagraph
                      style={{
                        textAlign: 'center',
                        backgroundColor: '#e0e0e0',
                      }}
                    >
                      I am the strongest man around!
                    </StyledParagraph>
                  </div>
                  <StyledParagraph
                    style={{
                      textAlign: 'center',
                      fontSize: '12px',
                    }}
                  >
                    Well, according to my son.
                  </StyledParagraph>
                  <StyledParagraph
                    style={{ fontSize: '28px', textAlign: 'center' }}
                  >
                    What's your superpower?
                  </StyledParagraph>
                </React.Fragment>
              );
            })}
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default About;
