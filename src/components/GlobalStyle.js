import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    padding: 0;
    margin: 0
}
body {
    ::-webkit-scrollbar {
        width:1vw;
    }
    ::-webkit-scrollbar-track {
        background-color: transparent;

    }
    ::-webkit-scrollbar-thumb {
        background-color: black;
    }
}
p {
    font-family: someFont
}
`
export default GlobalStyle