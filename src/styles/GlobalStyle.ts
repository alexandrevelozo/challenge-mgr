import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  :root {
    --orange-color: #ff8a00;
    --blue-color: #0f1a4b;
    --light-blue-color: #1ba8e2;
    --text-color: #1e1e1e;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
  }

  body {
    display: flex;
    font-family: 'Poppins', sans-serif;
    line-height: 1.6;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul {
    list-style: none;
  }
`

export default GlobalStyle
