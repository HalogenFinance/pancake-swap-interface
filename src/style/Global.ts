import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
* {
  font-family: 'Poppins',sans-serif;
}  
body {
    background-color: ${({ theme }) => theme.colors.background};
    background-position: -40px -50px;
   
    .token-amount-input{
      text-align: right !important;
      color: #fff;
      padding-right: 10px;
      font-size: 20px;
    }

    img {
      height: auto;
      max-width: 100%;
    }
  }
`

export default GlobalStyle
