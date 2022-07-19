import { useContext, useEffect } from "react";
import { ContainerTheme, IconThemes } from "./styled";
import { iconThemeDark, iconThemeLight } from "../../assets";
import { ThemeContext } from "../../context/GlobalContext";

export const Theme = () => {
  const { toggle } = useContext(ThemeContext);
  const { setToggle } = useContext(ThemeContext);
  const { handleToggle } = useContext(ThemeContext);

  // useEffect(() => {
  //   handleClick();
  // }, [setToggle]);

  // const handleClick = () => {
  //   setToggle(!toggle);
  // };
  console.log(toggle, "esse aqui");

  return (
    <ContainerTheme onClick={handleToggle}>
      {toggle && <IconThemes src={iconThemeDark} alt="Theme dark" />}
      {!toggle && <IconThemes src={iconThemeLight} alt="Theme light" />}
    </ContainerTheme>
  );
};
