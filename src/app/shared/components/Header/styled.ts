import { Link } from "react-router-dom";
import styled from "styled-components";

export const ContainerHeader = styled.header`
  padding: 10px 0 0;
  position: fixed;
  width: -webkit-fill-available;
  margin-bottom: 30px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.secondary};
  z-index: 99;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const ContentTopHeader = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 0 60px 16px;
  border-bottom: 4px solid ${({ theme }) => theme.colors.borderBottomTab};
`;

export const LinkHome = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text};
  margin-left: 10px;
  font-weight: bold;
  font-size: 0.875rem;
`;

export const ContentLinksToHome = styled.div`
  align-items: center;
  display: flex;
`;

export const ContentThemeAndLanguage = styled.div`
  display: flex;
  align-items: center;
`;

export const IconTheme = styled.div`
  cursor: pointer;
`;

export const LinkLanguage = styled(LinkHome)`
  font-size: 1rem;
  font-weight: 700;
  margin: auto 0 auto 20px;
  color: ${({ theme }) => theme.colors.text};
`;

export const ContentBottomHeader = styled.div`
  display: flex;
  align-items: center;
  padding-right: 60px;
`;

export const ContentNavigationHome = styled.div`
  padding: 0 60px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const HomeNavigationLink = styled(Link)`
  height: 100%;
  display: flex;
  align-items: center;
`;

export const ContentTitleAndDescription = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 8px;
  border-right: 1px solid ${({ theme }) => theme.colors.secondary};
`;

export const SubTitle = styled(Link)`
  color: ${({ theme }) => theme.colors.unLocalization};
  text-decoration: none;
  margin: 0 16px 8px 0;
  font-weight: bold;
`;

export const Description = styled(SubTitle)`
  font-size: 10px;
  margin-right: 0;
  font-weight: normal;
`;

export const UnLocalizationAndSearch = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const TitleUnLocalization = styled.p`
  display: flex;
  flex-direction: column;
  font-size: 1.3rem;
  color: ${({ theme }) => theme.colors.text};

  strong {
    margin-top: 4px;
  }
`;

export const Search = styled.input`
  background: transparent;
  border-radius: 20px;
  border: 3px solid ${({ theme }) => theme.colors.search};
  color: ${({ theme }) => theme.colors.text};
  padding: 10px 60px 10px 20px;
  width: 100%;

  :focus {
    outline: 0;
    border-color: ${({ theme }) => theme.colors.searchFocus};
  }
`;

export const SearchButton = styled.button`
  border-radius: 0 20px 20px 0;
  border-left: none;
  padding: 0 10px;
  cursor: pointer;
  background: transparent;
  position: absolute;
  right: 0;
  top: 6px;
  display: flex;
`;

export const ContentSearch = styled.div`
  width: 35%;
  display: flex;
  position: relative;
`;
