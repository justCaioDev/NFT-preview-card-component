import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle `

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        width: 100%;
        height: 100vh;
        background-color: hsl(217, 54%, 11%);
        font-family: 'Outfit', sans-serif;
    }

    p {
        font-size: 1.125rem;
    }
`

export default GlobalStyles