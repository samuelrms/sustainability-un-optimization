import { useContext } from "react";
import { ContainerTheme, IconThemes } from "./styled";
import { iconThemeDark, iconThemeLight } from "../../assets";
import { ValueGlobalContext } from "../../context/GlobalContext";

export const Theme = () => {
  const { handleToggleTheme, toggle } = useContext(ValueGlobalContext);

  return (
    <ContainerTheme onClick={handleToggleTheme}>
      {toggle && <IconThemes src={iconThemeLight} alt="Theme light" />}
      {!toggle && <IconThemes src={iconThemeDark} alt="Theme dark" />}
    </ContainerTheme>
  );
};
