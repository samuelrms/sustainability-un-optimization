import styled from "styled-components";

export const ContainerComments = styled.div`
  width: 30%;
  background: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.text};
  border-radius: 10px;
  height: 1100px;
`;

export const TitleContent = styled.h2`
  padding: 10px 10px 15px;
`;

export const CommentsContent = styled.ul`
  overflow-y: auto;
  height: 100%;
`;

export const Comment = styled.div`
  background: ${({ theme }) => theme.colors.tertiary};
  margin: 15px 5px;
  border-radius: 10px;
  padding: 5px;
  list-style: none;
`;

export const DataComment = styled.li`
  text-align: justify;
  padding: 10px 20px;
`;

export const DataCommentName = styled(DataComment)`
  color: ${({ theme }) => theme.colors.textSecondary};
  text-align: right;
  font-size: 1.125rem;
  font-weight: bold;
`;

export const ContentTextAndSubmit = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
`;

export const CommentText = styled.input`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.text};
  margin: 5px;
  border-radius: 10px;
  padding: 10px;
  background: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.text};
`;

export const Submit = styled.button`
  background: ${({ theme }) => theme.colors.secondary};
  cursor: pointer;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
