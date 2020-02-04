import React, { Component, lazy, Suspense } from "react";
// Styled Components
import GlobalStyle from "./styles/GlobalStyle";
// Loader
import Spinner from "./components/Spinner/Spinner";
// LazyLoad
const Layout = lazy(() => import("./Layout/Layout"));

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <GlobalStyle />
        <Suspense fallback={<Spinner />}>
          <Layout />
        </Suspense>
      </React.Fragment>
    );
  }
}
export default App;
