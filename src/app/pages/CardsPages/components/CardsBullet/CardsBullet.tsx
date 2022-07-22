import { useContext, useEffect, useState } from "react";
import { url } from "../../../../services";

import { useNavigate } from "react-router-dom";
import {
  ICardsState,
  Loading,
  Svgs,
  ValueGlobalContext,
} from "../../../../shared";
import { ContainerCard, ContentCard } from "./styled";

export const CardsBullet = () => {
  const [response, setResponse] = useState<ICardsState[]>();
  const [loading, setLoading] = useState<boolean>();
  const { toggle } = useContext(ValueGlobalContext);
  const navigation = useNavigate();

  useEffect(() => {
    getCard();
  }, [loading]);

  const getCard = async () => {
    try {
      const { data } = await url.get("/cards");
      const { cards } = data;
      if (Boolean(cards)) {
        setResponse(cards);
        setLoading(true);
      } else {
        setLoading(false);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleClick = (card: any) => {
    navigation(`/cards/${card.id}`, { state: { card } });
  };

  return (
    <ContainerCard>
      {!loading ? (
        <Loading />
      ) : (
        <>
          {response?.map((data, index: number) => {
            return (
              <ContentCard
                onClick={() => handleClick(data)}
                index={index}
                key={index}
              >
                {!toggle && (
                  <Svgs
                    width={20}
                    height={20}
                    src={data?.imageLight}
                    alt={data?.title}
                  />
                )}
                {toggle && (
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
