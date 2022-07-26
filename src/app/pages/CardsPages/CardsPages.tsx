import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { Svgs, ValueGlobalContext } from "../../shared";
import { CardsBullet, Comments, InfoCards } from "./components";
import {
  ContainerCard,
  Card,
  ContentText,
  DescriptionCardTitle,
  NumberContentCard,
  ObjectiveContentCard,
  TextContentCard,
  WrapCards,
  ContentCard,
} from "./styled";

interface ILocationState {
  card: {
    id: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
    title: string;
    objective: string;
    imageLight: string;
    imageDark: string;
  };
}

export const CardsPages = () => {
  const location = useLocation();
  const { card } = location.state as ILocationState;
  const { toggle } = useContext(ValueGlobalContext);

  return (
    <ContainerCard>
      <CardsBullet />
      <WrapCards>
        <ContentCard>
          <Card index={card.id}>
            <ContentText>
              <DescriptionCardTitle>
                Objetivo de Desenvolvimento Sustentável
              </DescriptionCardTitle>
              <NumberContentCard>{card?.id + 1}</NumberContentCard>
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
          </Card>
          <InfoCards />
        </ContentCard>
        <Comments />
      </WrapCards>
    </ContainerCard>
  );
};
