import React, { Component } from "react";
// Components
import Snackbar from "../components/Snackbar/Snackbar";

const withErrorHandler = (WrappedComponent, axios) => {
  return class extends Component {
    state = {
      error: null
    };

    componentDidMount() {
      axios.interceptors.request.use(req => {
        this.setState({ error: null });
        return req;
      });
      axios.interceptors.response.use(
        res => res,
        error => {
          this.setState({ error: error });
        }
      );
    }
    render() {
      return (
        <React.Fragment>
          <Snackbar show={this.state.error}>
            {this.state.error ? this.state.error.message : null}
          </Snackbar>
          <WrappedComponent {...this.props} />
        </React.Fragment>
      );
    }
  };
};

export default withErrorHandler;
