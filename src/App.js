import React, { Component, lazy, Suspense } from "react";
// Components
import Welcome from "./components/Welcome/Welcome";
// LazyLoad
const Layout = lazy(() => import("./Layout/Layout"));

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div>
          <Welcome name="PORTFOLIO">
            Ahmet Topic / Fullstack Web Developer
          </Welcome>
          <Suspense fallback={<p>SPINNER</p>}>
            <Layout />
          </Suspense>
        </div>
      </React.Fragment>
    );
  }
}
export default App;
