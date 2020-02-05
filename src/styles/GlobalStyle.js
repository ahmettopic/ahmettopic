import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  box-sizing: border-box;

  body, html {
    margin: 0;
    font-size: 16px;
    font-weight: 300;
    font-family: "Roboto Condensed", sans-serif;
  }
`;

export default GlobalStyle;
