import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --primary: #A01FF0
    --white: #FFFFFF
    --grey-100: #8A8D9B
    --grey-200: #726F86
    --grey-300: #26293E
    --grey-400: #201F2F
    --grey-500: #1B1821
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {}

  body, input, textarea, select, button {
    font: 400 1rem 'Work Sans', sans-serif;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }

    a {
      color: inherit;
      text-decoration: none;
    }

    button {
      cursor: pointer;
    }

    [disabled] {
      opacity: 0.6;
      cursor: not-allowed;
    }
  }
`
