import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-size: 14px;
    font-family: Poppins;
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
