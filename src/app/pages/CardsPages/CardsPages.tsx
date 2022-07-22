import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { Svgs, ValueGlobalContext } from "../../shared";
import { CardsBullet, InfoCards } from "./components";
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
  const { toggle } = useContext(ValueGlobalContext);

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
            width={250}
            height={250}
            src={card?.imageLight}
            alt={card?.title}
          />
        )}
        {toggle && (
          <Svgs
            width={250}
            height={250}
            src={card?.imageDark}
            alt={card?.title}
          />
        )}
      </ContentCard>
      <CardsBullet />
      <InfoCards />
    </ContainerCard>
  );
};
