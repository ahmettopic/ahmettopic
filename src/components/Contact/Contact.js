import React from "react";
// Material Grid
import Grid from "@material-ui/core/Grid";
// Styled Components
import StyledParagraph from "../../styles/StyledParagraph";

const contact = props => (
  <div
    style={{
      padding: "1em",
      display: "flex",
      alignItems: "center",
      textAlign: "center",
      justifyContent: "center"
    }}
  >
    <Grid container justify="center">
      <Grid item xs={12}>
        <StyledParagraph style={{ textAlign: "center" }}>
          <b>Some content on this page is still being developed</b>. Meanwhile
          visit
          <a
            style={{
              margin: "4px",
              textDecoration: "underline",
              color: "black"
            }}
            target="_blank"
            href="https://se.linkedin.com/in/ahmettopic?trk=profile-badge"
            rel="noreferrer noopener"
          >
            LinkedIn
          </a>
        </StyledParagraph>
        <StyledParagraph style={{ textAlign: "center", marginTop: "1em" }}>
          ahmettopic@hotmail.com
        </StyledParagraph>
      </Grid>
    </Grid>
  </div>
);

export default contact;
