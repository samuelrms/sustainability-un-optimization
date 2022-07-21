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
  width: calc(100% / 5 - 30px);
  background: ${({ theme, index }: any) => theme.colors.cards[index]};
  padding: 25px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 30px;
  border-radius: 10px;
  cursor: pointer;
`;

export const TextContentCard = styled.h2`
  color: ${({ theme }) => theme.colors.textCard};
  margin-bottom: 20px;
  display: flex;
  flex-direction: row;
  font-size: 1.5rem;
  align-items: flex-start;
  align-content: flex-start;
  height: calc(100% / 2 - 10px);
`;

export const NumberContentCard = styled(TextContentCard)`
  font-size: 2rem;
  margin: 0 10px 0 0;
`;
