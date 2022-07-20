import { useContext } from "react";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "../styles";
import { GlobalStyle } from "../styles/Global/GlobalStyles";
import { ThemeContext } from "../shared";
import { AppRoutes } from "../routes";

export const AssemblyApp = () => {
  const { toggle } = useContext(ThemeContext);

  return (
    <ThemeProvider theme={toggle ? darkTheme : lightTheme}>
      <GlobalStyle />
      <AppRoutes />
    </ThemeProvider>
  );
};
