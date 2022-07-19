import { Link } from "react-router-dom";
import styled from "styled-components";

export const ContainerHeader = styled.header`
  height: 40px;
  padding: 20px;
`;

export const ContentTopHeader = styled.div`
  height: 40px;
  margin-bottom: 20px;
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

export const LinkHome = styled(Link)`
  text-decoration: none;
  color: #000;
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
`;

export const ContentNavigationHome = styled.div`
  max-width: 40px;
  max-height: 40px;
`;
