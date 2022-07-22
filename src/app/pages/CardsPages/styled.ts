import styled from "styled-components";
import { ICardStyle } from "../../shared";

export const ContainerCard = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-content: space-between;
  padding: 180px 70px 40px;
`;

export const ContentCard = styled.div<ICardStyle>`
  width: 70%;
  height: 400px;
  background: ${({ theme, index }: any) => theme.colors.cards[index]};
  padding: 50px 50px 50px 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 80px 0 70px;
`;

export const ContentText = styled.div``;

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
  margin: 0 10px 0 0;
`;

export const ObjectiveContentCard = styled.p`
  color: ${({ theme }) => theme.colors.textCard};
  width: 70%;
`;
