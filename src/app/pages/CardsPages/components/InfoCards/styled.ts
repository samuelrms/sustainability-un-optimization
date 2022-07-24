import styled from "styled-components";

export const InfoCardsContainer = styled.div``;

export const ContentInfoCards = styled.div`
  margin-right: 20px;
`;

export const TitleContentCards = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.colors.text};
`;

export const TextContentCards = styled.p`
  margin-bottom: 30px;
  text-align: justify;
  color: ${({ theme }) => theme.colors.text};
`;
