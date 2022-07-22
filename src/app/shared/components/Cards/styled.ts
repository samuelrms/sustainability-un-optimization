import styled from "styled-components";
import { ICardStyle } from "./../../interface/interface";

export const ContainerCard = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-content: space-between;
  padding-bottom: 40px;
`;

export const ContentCard = styled.div<ICardStyle>`
  width: calc(100% / 5 - 10px);
  background: ${({ theme, index }: any) => theme.colors.cards[index]};
  padding: 25px 40px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 30px;
  border-radius: 10px;
  cursor: pointer;
`;

export const ContentText = styled.div`
  display: flex;
  height: 50%;
  margin-bottom: 20px;
`;

export const TextContentCard = styled.h2`
  color: ${({ theme }) => theme.colors.textCard};
  margin-bottom: 20px;
  font-size: 1.5rem;
  width: 80%;
`;

export const NumberContentCard = styled(TextContentCard)`
  font-size: 2rem;
  margin-right: 5px;
  width: 20%;
`;
