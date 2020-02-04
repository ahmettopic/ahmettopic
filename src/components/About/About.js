import React, { Component } from "react";
// Material Grid
import Grid from "@material-ui/core/Grid";
// JSON Data
import about from "./about.json";
// Styled Components
import StyledDiv from "../../styles/StyledDiv";
import StyledParagraph from "../../styles/StyledParagraph";

class About extends Component {
  render() {
    return (
      <StyledDiv>
        <Grid container direction="row">
          <Grid item xs={12} sm={6}>
            {about.map((about, id) => {
              return (
                <StyledParagraph key={id} style={{ textAlign: "flex-start" }}>
                  {about.lead_1}
                </StyledParagraph>
              );
            })}
          </Grid>
          <Grid item xs={12} sm={6}>
            <StyledParagraph style={{ textAlign: "center" }}></StyledParagraph>
          </Grid>
        </Grid>
      </StyledDiv>
    );
  }
}

export default About;
