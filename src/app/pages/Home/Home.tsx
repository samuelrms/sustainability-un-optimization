// import { Loading } from "../../shared";
import { Cards } from "./../../shared/components/Cards/Cards";
import {
  AboutHome,
  BodyHome,
  ContainerHome,
  ContentBodyHome,
  HeaderHome,
  LinkHome,
  TextContent,
} from "./styled";

export const Home = () => {
  return (
    <ContainerHome>
      <HeaderHome>
        <LinkHome to="/">Início</LinkHome>
        <AboutHome>/</AboutHome>
        <AboutHome>
          Sobre o nosso trabalho para alcançar os Objetivos de Desenvolvimento
          Sustentável em Uberlândia
        </AboutHome>
      </HeaderHome>
      <BodyHome>
        <ContentBodyHome>
          <TextContent>
            Sobre o nosso trabalho para alcançar os Objetivos de Desenvolvimento
            Sustentável no Brasil
          </TextContent>
        </ContentBodyHome>
        <Cards />
      </BodyHome>
    </ContainerHome>
  );
};
