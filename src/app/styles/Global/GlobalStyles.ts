import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*, body, div, span, h1, h2, h3, h4, h5, h6, p, a, img, footer, header, nav, section
{  
    margin: 0;  
    padding: 0;  
    border: 0;  
    box-sizing: border-box;
}
body{
    overflow-x: hidden;
    background: ${({ theme }) => theme.colors.primary};
    }
`;
