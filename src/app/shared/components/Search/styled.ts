import styled from "styled-components";

export const ContainerSearch = styled.div`
  width: 35%;
  display: flex;
  position: relative;
`;

export const SearchInput = styled.input`
  background: transparent;
  border-radius: 10px;
  border: 3px solid ${({ theme }) => theme.colors.search};
  color: ${({ theme }) => theme.colors.text};
  padding: 10px 60px 10px 20px;
  width: 100%;

  :focus {
    outline: 0;
    border-color: ${({ theme }) => theme.colors.searchFocus};
    border-radius: 0;
  }
`;

export const SearchButton = styled.button`
  border-radius: 0 20px 20px 0;
  border-left: none;
  padding: 0 10px;
  background: transparent;
  position: absolute;
  right: 0;
  top: 6px;
  display: flex;
`;

export const ContentSearch = styled.ul`
  top: 51px;
  position: absolute;
  list-style: none;
  background: ${({ theme }) => theme.colors.textSecondary};
  padding: 20px;
  overflow: visible;
  border-radius: 0 0 10px 10px;
  width: 100%;
`;

export const ListSearch = styled.li`
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 10px;
  font-size: 1.2rem;
  cursor: pointer;

  :hover {
    color: ${({ theme }) => theme.colors.textGray};
  }
`;
