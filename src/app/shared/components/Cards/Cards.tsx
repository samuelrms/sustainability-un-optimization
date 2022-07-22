import { useContext, useEffect, useState } from "react";
import { url } from "../../../services";
import { Loading } from "../../animation";
import { ValueGlobalContext } from "../../context/GlobalContext";
import { ICardsState } from "../../interface/interface";
import { Svgs } from "../Svgs/Svgs";
import { useNavigate } from "react-router-dom";
import {
  ContainerCard,
  ContentCard,
  ContentText,
  NumberContentCard,
  TextContentCard,
} from "./styled";

export const Cards = () => {
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
                <ContentText>
                  <NumberContentCard>{data?.id}</NumberContentCard>
                  <TextContentCard>{data?.title}</TextContentCard>
                </ContentText>
                {!toggle && (
                  <Svgs
                    width={100}
                    height={100}
                    src={data?.imageLight}
                    alt={data?.title}
                  />
                )}
                {toggle && (
                  <Svgs
                    width={100}
                    height={100}
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
