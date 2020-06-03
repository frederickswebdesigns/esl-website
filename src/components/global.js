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
  h3 {
    font-family: "Neo Sans Bold Italic", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    text-rendering: optimizeLegibility;
    
  }

  .go {
    
    
    text-align: center;
    color: white;
    background: #dc2e22;
    padding: 20px;
    border-radius: 10px;
    text-decoration: none;
    font-family: "Neo Sans Bold Italic";
    margin: 10px auto 1.45rem auto ;
    transition: 0.2s all;
  }
  .go:hover {
    color: white;
    background: #000333;
  }
  `
export default GlobalStyles
