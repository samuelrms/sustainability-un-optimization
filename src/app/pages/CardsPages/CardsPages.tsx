import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { Svgs, ThemeContext } from "../../shared";
import { Cards } from "./components/Cards";
import {
  ContainerCard,
  ContentCard,
  ContentText,
  DescriptionCardTitle,
  NumberContentCard,
  ObjectiveContentCard,
  TextContentCard,
} from "./styled";

export const CardsPages = () => {
  const location = useLocation();
  const { card }: any = location.state;
  const { toggle } = useContext(ThemeContext);

  return (
    <ContainerCard>
      <ContentCard index={card.id - 1}>
        <ContentText>
          <DescriptionCardTitle>
            Objetivo de Desenvolvimento Sustentável
          </DescriptionCardTitle>
          <NumberContentCard>{card?.id}</NumberContentCard>
          <TextContentCard>{card?.title}</TextContentCard>
          <ObjectiveContentCard>{card?.objective}</ObjectiveContentCard>
        </ContentText>
        {!toggle && (
          <Svgs
            width={100}
            height={100}
            src={card?.imageLight}
            alt={card?.title}
          />
        )}
        {toggle && (
          <Svgs
            width={100}
            height={100}
            src={card?.imageDark}
            alt={card?.title}
          />
        )}
      </ContentCard>
      <Cards />
    </ContainerCard>
  );
};
