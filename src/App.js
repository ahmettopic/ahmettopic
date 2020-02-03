import React, { Component, lazy, Suspense } from "react";
// Components
import Welcome from "./components/Welcome/Welcome";
// Loader
import Spinner from "./components/Spinner/Spinner";
// LazyLoad
const Layout = lazy(() => import("./Layout/Layout"));

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Welcome name="PORTFOLIO">
          Ahmet Topic / Fullstack Web Developer
        </Welcome>
        <Suspense fallback={<Spinner />}>
          <Layout />
        </Suspense>
      </React.Fragment>
    );
  }
}
export default App;
