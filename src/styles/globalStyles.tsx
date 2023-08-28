import { createGlobalStyle } from "styled-components";
import { reset } from "./reset";
import { variables } from "./variables";

const GlobalStyles = createGlobalStyle`
    ${reset}
    ${variables}

    html {
        font-size: 62.5%;
        scroll-behavior: smooth;
        @font-face {
            font-family: "MontserratAlternates";
            src: url('/fonts/Montserrat_Alternates/MontserratAlternates-Regular.ttf') format('truetype');
        }

        @media only screen and (max-width: 93.75em){
            font-size: 50%;
        }
    }

    body {
        font-family: 'MontserratAlternates';
        background-color: white;
        
    }
`;
``
export default GlobalStyles;    