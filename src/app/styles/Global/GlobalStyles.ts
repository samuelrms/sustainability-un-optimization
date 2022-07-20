import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body, div, span, h1, h2, h3, h4, h5, h6, p, a, img, footer, header, nav, section
{  
    margin: 0;  
    padding: 0;  
    border: 0;  
}
body{
    padding: 0 40px;
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.text};
}
`;
