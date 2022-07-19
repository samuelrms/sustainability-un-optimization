import { ContainerHeader } from "./styled";
import logoHeaderNav from "../../assets/svg/logoHeader.svg";
import { Svgs } from "../Svgs/Svgs";

export const Header = () => {
  return (
    <ContainerHeader>
      <Svgs src={logoHeaderNav} alt="Simbolo da ONU" />
    </ContainerHeader>
  );
};
