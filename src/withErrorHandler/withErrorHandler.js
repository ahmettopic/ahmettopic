import React from "react";
// Components
import Snackbar from "../components/Snackbar/Snackbar";

const withErrorHandler = WrappedComponent => {
  return props => {
    return (
      <React.Fragment>
        <Snackbar show>
          <p>Something went wrong!</p>
        </Snackbar>
        <WrappedComponent {...props} />
      </React.Fragment>
    );
  };
};

export default withErrorHandler;
