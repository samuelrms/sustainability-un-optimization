import { useContext } from "react";

import { useNavigate } from "react-router-dom";
import {
  ICardsState,
  Loading,
  Svgs,
  ValueGlobalContext,
} from "../../../../shared";
import { ContainerCard, ContentCard } from "./styled";

export const CardsBullet = () => {
  const { toggle, loading, response } = useContext(ValueGlobalContext);
  const navigation = useNavigate();

  const handleClick = (card: ICardsState) => {
    navigation(`/cards/${card.id}`, { state: { card } });
  };

  return (
    <ContainerCard>
      {!loading ? (
        <Loading />
      ) : (
        <>
          {response?.map((data, index) => {
            return (
              <ContentCard
                onClick={() => handleClick(data)}
                index={index}
                key={index}
              >
                {toggle && (
                  <Svgs
                    width={20}
                    height={20}
                    src={data?.imageLight}
                    alt={data?.title}
                  />
                )}
                {!toggle && (
                  <Svgs
                    width={20}
                    height={20}
                    src={data?.imageDark}
                    alt={data?.title}
                  />
                )}
              </ContentCard>
            );
          })}
        </>
      )}
    </ContainerCard>
  );
};
