import { useEffect, useState } from "react";
import { url } from "../../../services";
import { Loading } from "../../animation";
import { ICardsState } from "../../interface/interface";
import { Svgs } from "../Svgs/Svgs";
import {
  ContainerCard,
  ContentCard,
  NumberContentCard,
  TextContentCard,
} from "./styled";

export const Cards = () => {
  const [response, setResponse] = useState<ICardsState[]>();
  const [loading, setLoading] = useState<boolean>();

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

  console.log(response);

  return (
    <ContainerCard>
      {!loading ? (
        <Loading />
      ) : (
        <>
          {response?.map((data, index: number) => {
            return (
              <ContentCard index={index} key={index}>
                <TextContentCard>
                  <NumberContentCard>{data?.id}</NumberContentCard>
                  {data?.title}
                </TextContentCard>
                <Svgs
                  width={100}
                  height={100}
                  src={data?.image}
                  alt={data?.title}
                />
              </ContentCard>
            );
          })}
        </>
      )}
    </ContainerCard>
  );
};
