'use client'

import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 62.5%;
    }

    html, body{
        background-color: #06092b;
        color: #fff;
        width: 100%;
        height: 100%;
        padding: 3rem;
        display: flex;
        align-items: center;
        justify-content: center;
}`

export default GlobalStyles
