// import { Loading } from "../../shared";
import { textHome } from "../../shared";
import { Cards } from "./../../shared/components/Cards/Cards";
import {
  AboutHome,
  BodyHome,
  ContainerHome,
  ContentBodyHome,
  DescriptionHow,
  HeaderHome,
  HowBody,
  HowContent,
  LinkHome,
  TextContent,
  TextHow,
} from "./styled";

export const Home = () => {
  return (
    <ContainerHome>
      <HeaderHome>
        <LinkHome to="/">{textHome.linkHome}</LinkHome>
        <AboutHome>/</AboutHome>
        <AboutHome>{textHome.aboutHome}</AboutHome>
      </HeaderHome>
      <BodyHome>
        <ContentBodyHome>
          <TextContent>{textHome.textContent}</TextContent>
        </ContentBodyHome>
        <HowBody>
          <HowContent>
            <TextHow>{textHome.textHow.firstText}</TextHow>
            <DescriptionHow>
              {textHome.descriptionHow.firstDescription}
            </DescriptionHow>
          </HowContent>
          <HowContent>
            <TextHow>{textHome.textHow.secondText}</TextHow>
            <DescriptionHow>
              {textHome.descriptionHow.secondDescription}
            </DescriptionHow>
          </HowContent>
        </HowBody>
        <Cards />
      </BodyHome>
    </ContainerHome>
  );
};
