import styled from "styled-components";
import { ICardStyle } from "../../shared";

export const ContainerCard = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: flex-start;
  padding: 180px 70px 40px;
`;

export const WrapCards = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ContentCard = styled.div`
  width: 70%;
`;

export const Card = styled.div<ICardStyle>`
  height: 400px;
  background: ${({ theme, index }: any) => theme.colors.cards[index]};
  padding: 50px 50px 50px 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0 10px 70px 0;
`;

export const ContentText = styled.div`
  width: 50%;
`;

export const DescriptionCardTitle = styled.h2`
  color: ${({ theme }) => theme.colors.textCard};
  margin-bottom: 20px;
  font-size: 1rem;
  font-weight: normal;
`;

export const TextContentCard = styled(DescriptionCardTitle)`
  color: ${({ theme }) => theme.colors.textCard};
  font-size: 1.5rem;
  font-weight: bold;
`;

export const NumberContentCard = styled(DescriptionCardTitle)`
  font-size: 5rem;
  margin-bottom: 15px;
`;

export const ObjectiveContentCard = styled.p`
  color: ${({ theme }) => theme.colors.textCard};
  text-align: justify;
`;
