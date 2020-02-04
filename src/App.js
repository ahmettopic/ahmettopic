import React, { Component, lazy, Suspense } from "react";
// Components
import Welcome from "./components/Welcome/Welcome";
// Styled Components
import GlobalStyle from "./styles/GlobalStyle";
// Loader
import Spinner from "./components/Spinner/Spinner";
import SnackBar from "./components/SnackBar/SnackBar";
// LazyLoad
const Layout = lazy(() => import("./Layout/Layout"));

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <GlobalStyle />
        <SnackBar />
        <Welcome />
        <Suspense fallback={<Spinner />}>
          <Layout />
        </Suspense>
      </React.Fragment>
    );
  }
}
export default App;
