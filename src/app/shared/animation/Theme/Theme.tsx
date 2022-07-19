import { useState } from "react";
import { ContainerTheme } from "./styled";
import { iconThemeDark, iconThemeLight } from "../../assets";
import { Svgs } from "../../components";

export const Theme = () => {
  const [isTheme, setIsTheme] = useState<boolean>(true);

  const handleAnimation = () => {
    setIsTheme(!isTheme);
  };

  return (
    <ContainerTheme onClick={handleAnimation}>
      {isTheme && <Svgs src={iconThemeDark} alt="Theme dark" />}
      {!isTheme && <Svgs src={iconThemeLight} alt="Theme light" />}
    </ContainerTheme>
  );
};
