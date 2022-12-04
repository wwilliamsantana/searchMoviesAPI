import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body, input, textarea, button{
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

  :focus{
    outline: none;
    
  }

  body{
    background-color: ${(props) => props.theme['gray-800']};
    --webkit-font-smoothing: antialiased;
    color: ${(props) => props.theme['gray-300']};
  }

`
