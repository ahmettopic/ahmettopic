import React from "react";
// Material Grid
import Grid from "@material-ui/core/Grid";
// Styled Components
import StyledParagraph from "../../styles/StyledParagraph";

const portfolio = props => (
  <div
    style={{
      padding: "1em"
    }}
  >
    <Grid container direction="row">
      <Grid item xs>
        <StyledParagraph style={{ textAlign: "center" }}>
          Some content on this page is still being developed. Meanwhile visit my
          GitHub page
        </StyledParagraph>
        <StyledParagraph style={{ margin: "20px", textAlign: "center" }}>
          <a
            style={{
              textTransform: "uppercase",
              textDecoration: "none",
              color: "black"
            }}
            target="_blank"
            href="https://github.com/ahmettopic"
            rel="noreferrer noopener"
          >
            here
          </a>
        </StyledParagraph>
      </Grid>
    </Grid>
  </div>
);

export default portfolio;
