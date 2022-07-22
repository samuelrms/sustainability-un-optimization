import { useLocation } from "react-router-dom";
import {
  ContentInfoCards,
  InfoCardsContainer,
  TextContentCards,
  TitleContentCards,
} from "./styled";

export const InfoCards = () => {
  const location = useLocation();
  const { card }: any = location.state;

  return (
    <InfoCardsContainer>
      <ContentInfoCards>
        <TitleContentCards>
          Objetivo {card?.id}.{""} {card?.objective}
        </TitleContentCards>
        <TextContentCards>
          {card?.id && "1.1 "}
          {card?.content?.firstObjective}
        </TextContentCards>
        <TextContentCards>
          {card?.id && "1.2 "}
          {card?.content?.secondObjective}
        </TextContentCards>
        <TextContentCards>
          {card?.id && "1.3 "}
          {card?.content?.thirdObjective}
        </TextContentCards>
        <TextContentCards>
          {card?.content?.fourthObjetive && "1.4 "}
          {card?.content?.fourthObjetive}
        </TextContentCards>
        <TextContentCards>
          {card?.content?.fourthObjetive && "1.5 "}
          {card?.content?.fifthObjective}
        </TextContentCards>
      </ContentInfoCards>
    </InfoCardsContainer>
  );
};
