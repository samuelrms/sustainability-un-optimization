import { useContext } from "react";
import { Loading } from "../../animation";
import { ValueGlobalContext } from "../../context/GlobalContext";
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
  const { toggle, response, loading } = useContext(ValueGlobalContext);
  const navigation = useNavigate();

  const handleClick = (card: any) => {
    navigation(`/cards/${card?.id}`, { state: { card } });
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
