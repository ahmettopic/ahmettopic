import React from "react";
// Material Grid
import Grid from "@material-ui/core/Grid";
// CSS
import "../../styles/styles.css";

const welcome = props => {
  return (
    <React.Fragment>
      <div className="Welcome">
        <Grid container direction="row" justify="center" alignItems="center">
          <div>
            <h1>{props.name}</h1>
            <p>{props.children}</p>
          </div>
        </Grid>
      </div>
    </React.Fragment>
  );
};

export default welcome;
