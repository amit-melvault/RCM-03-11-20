import '@patternfly/react-core/dist/styles/base.css';
import { createGlobalStyle } from './styles/styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
    line-height: 1.5;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    background-color: #f7f5f9;
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }

  input, select {
    font-family: inherit;
    font-size: inherit;
  }
  input[type=text]:focus {
      border: none;
    }
  button {
   margin-top: 20px;
   background-color: #f8b300;
   color: black;
  }
  button:hover {
    background-color:lightblue;
    color: black;
  }
`;

export default GlobalStyle;
