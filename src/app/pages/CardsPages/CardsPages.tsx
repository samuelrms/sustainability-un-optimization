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

export const CardsPages = () => {
  const location = useLocation();
  const { card }: any = location.state;
  const { toggle } = useContext(ValueGlobalContext);

  return (
    <ContainerCard>
      <CardsBullet />
      <WrapCards>
        <ContentCard>
          <Card index={card.id - 1}>
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
          </Card>
          <InfoCards />
        </ContentCard>
        <Comments />
      </WrapCards>
    </ContainerCard>
  );
};
