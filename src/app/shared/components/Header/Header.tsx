import { useContext } from "react";
import {
  ContainerHeader,
  ContentBottomHeader,
  ContentLinksToHome,
  ContentNavigationHome,
  ContentThemeAndLanguage,
  ContentTitleAndDescription,
  ContentTopHeader,
  Description,
  HomeNavigationLink,
  LinkHome,
  LinkLanguage,
  SubTitle,
  TitleUnLocalization,
  UnLocalizationAndSearch,
} from "./styled";
import {
  logoHeaderSvg,
  houseIconSvg,
  houseIconDarkSvg,
  unDotsIcon,
} from "../../assets";
import { Svgs } from "../Svgs/Svgs";
import { Link } from "react-router-dom";
import { Theme } from "../../animation";
import { ValueGlobalContext } from "../../context/GlobalContext";
import { textHeader } from "../../mocks";
import { Search } from "../Search/Search";

export const Header = () => {
  const { toggle } = useContext(ValueGlobalContext);

  return (
    <ContainerHeader>
      <ContentTopHeader>
        <ContentLinksToHome>
          <Link to="/">
            {!toggle && (
              <Svgs width={30} height={30} src={houseIconSvg} alt="Home" />
            )}
            {toggle && (
              <Svgs width={30} height={30} src={houseIconDarkSvg} alt="Home" />
            )}
          </Link>
          <LinkHome to="/">{textHeader.linkHome}</LinkHome>
        </ContentLinksToHome>
        <ContentThemeAndLanguage>
          <Theme />
          <LinkLanguage to="/">{textHeader.linkLanguage}</LinkLanguage>
        </ContentThemeAndLanguage>
      </ContentTopHeader>
      <ContentBottomHeader>
        <ContentNavigationHome>
          <HomeNavigationLink to="/">
            <Svgs
              width={100}
              height={100}
              src={logoHeaderSvg}
              alt="Simbolo da ONU"
            />
          </HomeNavigationLink>
          <ContentTitleAndDescription>
            <SubTitle to="/">{textHeader.subTitle}</SubTitle>
            <Description to="/">{textHeader.description}</Description>
            <Svgs width={90} height={3} src={unDotsIcon} alt="Simbolo da ONU" />
          </ContentTitleAndDescription>
        </ContentNavigationHome>
        <UnLocalizationAndSearch>
          <TitleUnLocalization>
            {textHeader.titleUnLocalization.normal}
            <strong>{textHeader.titleUnLocalization.bold}</strong>
          </TitleUnLocalization>
          <Search />
        </UnLocalizationAndSearch>
      </ContentBottomHeader>
    </ContainerHeader>
  );
};
