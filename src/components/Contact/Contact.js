import React from "react";
// Material Grid
import Grid from "@material-ui/core/Grid";
// Styled Components
import StyledParagraph from "../../styles/StyledParagraph";
// Media
import card from "../../assets/card.png";

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
          Some content on this page is still being developed. Meanwhile, take my
          business card!
        </StyledParagraph>
      </Grid>
      <Grid item xs={12}>
        <img
          style={{ width: "40vh", paddingTop: "2em" }}
          src={card}
          alt="LuckyCard"
        />
      </Grid>
    </Grid>
  </div>
);

export default contact;
