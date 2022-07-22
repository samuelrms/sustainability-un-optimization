import { useContext } from "react";
import { ContainerTheme, IconThemes } from "./styled";
import { iconThemeDark, iconThemeLight } from "../../assets";
import { ValueGlobalContext } from "../../context/GlobalContext";

export const Theme = () => {
  const { toggle } = useContext(ValueGlobalContext);
  const { handleToggle } = useContext(ValueGlobalContext);

  return (
    <ContainerTheme onClick={handleToggle}>
      {toggle && <IconThemes src={iconThemeDark} alt="Theme dark" />}
      {!toggle && <IconThemes src={iconThemeLight} alt="Theme light" />}
    </ContainerTheme>
  );
};
