import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-size: 14px;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-style: normal;
  }

  body {
    -webkit-font-smoothing: antialiased;
    background: #FDFDFD;
  }

  body, input, button {
    color: #1F1F1F;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }
`;
