import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

button{
    border-color: transparent;
    background-color: transparent;
    cursor: pointer;
}

ul, li {
    list-style: none;
}

body {
    font-family: 'Inter', sans-serif;
}

:root {
     --color-primary: #27AE60 ;
     --color-primary-50: #93D7AF;
     --color-secondary: #EB5757;
     --gray-100: #333333 ;
     --grey-50: #828282;
     --grey-20: #E0E0E0;
     --grey-0: #F5F5F5;
}

`