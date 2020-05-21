import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
${
  "" /* @font-face {
  font-family: "Neo Sans Bold Italic";
  src: url("NeoSans-BoldItalic.woff");
} */
}
  html, body {
    margin: 0;
    padding: 0;
  }
  *, *::after, *::before {
    box-sizing: border-box;
  }
  body {
    font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    text-rendering: optimizeLegibility;
    
  }
  h1,
  h2,
  h3, a {
    font-family: "Neo Sans Bold Italic", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";;
    text-rendering: optimizeLegibility;
    
  }
  `
export default GlobalStyles
