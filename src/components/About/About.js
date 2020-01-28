import React, { Component } from "react";
// Material UI
import Grid from "@material-ui/core/Grid";
// CSS
import "../../styles/styles.css";
// Picture
import Portrait from "../../assets/portrait_1.png";
// JSON Data
import about from "../../data/about.json";

class About extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="About">
          {about.map((about, index) => {
            return (
              <Grid container direction="row">
                <Grid item xs={6}>
                  <p>{about.lead_1}</p>
                </Grid>
                <Grid container xs={6}>
                  <img src={Portrait} alt="Portrait" style={{ width: "70%" }} />
                </Grid>
              </Grid>
            );
          })}
        </div>
      </React.Fragment>
    );
  }
}

export default About;
