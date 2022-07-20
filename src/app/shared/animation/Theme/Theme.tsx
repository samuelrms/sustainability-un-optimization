import { useContext } from "react";
import { ContainerTheme, IconThemes } from "./styled";
import { iconThemeDark, iconThemeLight } from "../../assets";
import { ThemeContext } from "../../context/GlobalContext";

export const Theme = () => {
  const { toggle } = useContext(ThemeContext);
  const { handleToggle } = useContext(ThemeContext);

  return (
    <ContainerTheme onClick={handleToggle}>
      {toggle && <IconThemes src={iconThemeDark} alt="Theme dark" />}
      {!toggle && <IconThemes src={iconThemeLight} alt="Theme light" />}
    </ContainerTheme>
  );
};
