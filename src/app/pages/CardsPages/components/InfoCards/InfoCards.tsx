import { useLocation } from "react-router-dom";
import {
  ContentInfoCards,
  InfoCardsContainer,
  TextContentCards,
  TitleContentCards,
} from "./styled";

export const InfoCards = () => {
  const location = useLocation();
  const { card }: any = location?.state;

  return (
    <InfoCardsContainer>
      {Boolean(card) && (
        <ContentInfoCards>
          <TitleContentCards>
            Objetivo {card?.id}. {card?.objective}
          </TitleContentCards>
          {card?.content?.map((data: string, index: number) => {
            return <TextContentCards key={index}>{data}</TextContentCards>;
          })}
        </ContentInfoCards>
      )}
    </InfoCardsContainer>
  );
};
