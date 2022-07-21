import { useContext } from "react";
import {
  ContainerHeader,
  ContentBottomHeader,
  ContentLinksToHome,
  ContentNavigationHome,
  ContentSearch,
  ContentThemeAndLanguage,
  ContentTitleAndDescription,
  ContentTopHeader,
  Description,
  HomeNavigationLink,
  LinkHome,
  LinkLanguage,
  Search,
  SearchButton,
  SubTitle,
  TitleUnLocalization,
  UnLocalizationAndSearch,
} from "./styled";
import {
  logoHeaderSvg,
  houseIconSvg,
  houseIconDarkSvg,
  unDotsIcon,
  searchIconLight,
  searchIconDark,
} from "../../assets";
import { Svgs } from "../Svgs/Svgs";
import { Link } from "react-router-dom";
import { Theme } from "../../animation";
import { ThemeContext } from "../../context/GlobalContext";
import { textHeader } from "../../mocks";

export const Header = () => {
  const { toggle } = useContext(ThemeContext);
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
          <ContentSearch>
            <Search placeholder="Busca" />
            <SearchButton>
              {toggle && <Svgs src={searchIconDark} alt="search icon dark" />}
              {!toggle && (
                <Svgs src={searchIconLight} alt="search icon light" />
              )}
            </SearchButton>
          </ContentSearch>
        </UnLocalizationAndSearch>
      </ContentBottomHeader>
    </ContainerHeader>
  );
};
