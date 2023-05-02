import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`

    * {
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;
        font-family: 'Montserrat', sans-serif;
        font-weight: 700;
    }

    body {
        width: 100vw;
        height: 100vh;
        overflow-x: hidden;
        background-color: #F2F2F2;
        background-image: url("./images/bg-top.svg"), url("./images/bg-bottom.svg");
        background-repeat: no-repeat;
        background-position: top -20px left 200px, bottom -300px right 200px;
    }


`