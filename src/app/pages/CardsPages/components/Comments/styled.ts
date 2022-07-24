import styled from "styled-components";

export const ContainerComments = styled.div`
  width: 30%;
  background: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.text};
  border-radius: 10px;
`;

export const CommentsContent = styled.ul``;

export const Comment = styled.div`
  background: ${({ theme }) => theme.colors.tertiary};
  margin: 5px;
  border-radius: 10px;
  padding: 5px;
  list-style: none;
`;
