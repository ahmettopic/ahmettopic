import React, { Component } from "react";
// Material Grid
import Grid from "@material-ui/core/Grid";
// CSS
import "../../styles/styles.css";
// JSON Data
import about from "./about.json";

class About extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="About">
          <Grid container direction="row" justify="center" alignItems="center">
            <Grid item xs={12} sm={4}>
              {about.map((about, id) => {
                return (
                  <div className="AboutLeft">
                    <p>{about.lead_1}</p>
                  </div>
                );
              })}
            </Grid>
            <Grid item xs={12} sm={4}>
              <div className="AboutRight">
                <p>BILD</p>
              </div>
            </Grid>
          </Grid>
        </div>
      </React.Fragment>
    );
  }
}

export default About;
