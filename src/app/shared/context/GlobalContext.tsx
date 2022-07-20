import { createContext, useState } from "react";
import {
  IGlobalThemeContext,
  IToggleThemeContext,
} from "../interface/interface";

export const ThemeContext = createContext<IGlobalThemeContext>(
  {} as IGlobalThemeContext,
);

export const ToggleThemeContext = ({ children }: IToggleThemeContext) => {
  const [toggle, setToggle] = useState<boolean>();

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const themeContextToggle: IGlobalThemeContext = {
    toggle: toggle,
    handleToggle: handleToggle,
  };

  return (
    <ThemeContext.Provider value={themeContextToggle}>
      {children}
    </ThemeContext.Provider>
  );
};
