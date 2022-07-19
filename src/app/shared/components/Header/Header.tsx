import {
  ContainerHeader,
  ContentLinksToHome,
  ContentNavigationHome,
  ContentThemeAndLanguage,
  ContentTopHeader,
  IconTheme,
  LinkHome,
  LinkLanguage,
} from "./styled";
import { logoHeaderSvg, houseIconSvg } from "../../assets";
import { Svgs } from "../Svgs/Svgs";
import { Link } from "react-router-dom";
import { Theme } from "../../animation";

export const Header = () => {
  return (
    <ContainerHeader>
      <ContentTopHeader>
        <ContentLinksToHome>
          <Link to="/">
            <Svgs width={30} height={30} src={houseIconSvg} alt="Home" />
          </Link>
          <LinkHome to="/">Bem-vindo aos Bairros Unidos de Uberlândia</LinkHome>
        </ContentLinksToHome>
        <ContentThemeAndLanguage>
          <Theme />
          <LinkLanguage to="/">Português</LinkLanguage>
        </ContentThemeAndLanguage>
      </ContentTopHeader>
      <ContentNavigationHome>
        <Link to="/">
          <Svgs src={logoHeaderSvg} alt="Simbolo da ONU" />
        </Link>
      </ContentNavigationHome>
    </ContainerHeader>
  );
};
