import { createGlobalStyle } from 'styled-components'
import { colors, fonts } from './variables'

const GlobalStyle = createGlobalStyle`
    * {
        
    }
    body {
        margin: 0 auto;
        color: ${colors.primary};
        font-family: ${fonts.body};
        background-color: ${colors.secondary}
    }
    .link {
        z-index: 3;
        text-decoration: none;
        color: ${colors.secondary};
    }
    .list-recipe-title {
        font-size: 25px;
    }
`

export default GlobalStyle