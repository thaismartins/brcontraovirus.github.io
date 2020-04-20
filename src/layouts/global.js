import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;

    *:focus {
      outline: 0;
    }
  }

  html {
    width: 100vw;
    overflow-x: hidden;
    -webkit-overflow-scrolling: touch;
  }
  
  html,
  body {
    margin: 0;
    padding: 0;
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Open Sans', sans-serif;
    font-style: normal;
    font-stretch: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: normal;
    background: #fff;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    color: ${({ theme }) => theme.colors.dark};
    padding-top: 80px;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  input,
  textarea,
  select {
    font-family: 'Open Sans', sans-serif;
    font-style: normal;
    font-stretch: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: normal;
  }
`

export default GlobalStyle
