import React, { Component, lazy, Suspense } from "react";
// Components
import Welcome from "./components/Welcome/Welcome";
// Loader
import { Block } from "styled-loaders-react";
// LazyLoad
const Layout = lazy(() => import("./Layout/Layout"));

class App extends Component {
  state = {
    loading: true
  };

  componentDidMount = () => {
    setTimeout(() => {
      this.setState({
        loading: false
      });
    }, 5000);
  };

  render() {
    return (
      <React.Fragment>
        <Welcome name="PORTFOLIO">
          Ahmet Topic / Fullstack Web Developer
        </Welcome>
        <Suspense
          fallback={this.state.loading ? <Spinner /> : <Layout />}
        ></Suspense>
      </React.Fragment>
    );
  }
}
export default App;
