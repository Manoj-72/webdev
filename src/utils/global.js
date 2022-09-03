import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  
  html {
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
  }

  body {
    margin: 0;
    box-sizing: border-box;
    font-family: 'Muli', sans-serif;
  }

  h1, h2 {
    font-family: 'Oswald', sans-serif;
    font-size: 2em;
    margin: 0.67em 0;
  }


  button,
  input,
  optgroup,
  select,
  textarea {
    font-family: inherit;
    font-size: 100%;
    line-height: 1.15; 
    margin: 0;
  }

  progress {
    vertical-align: baseline;
  }
  
  textarea {
    overflow: auto;
  }

`;
