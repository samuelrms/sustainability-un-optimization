import styled from "styled-components";
import { ICardStyle } from "../../../shared";

export const ContainerCard = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-content: space-between;
  position: fixed;
  left: 10px;
  top: 174px;
  z-index: 99;
  padding: 5px 0;
  background: ${({ theme }) => theme.colors.primary};
`;

export const ContentCard = styled.div<ICardStyle>`
  padding: 20px;
  background: ${({ theme, index }: any) => theme.colors.cards[index]};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 50%;
  cursor: pointer;
`;
