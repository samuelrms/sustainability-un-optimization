import { Link } from "react-router-dom";
import styled from "styled-components";
import { wellIcon } from "../../shared";

export const ContainerHome = styled.div`
  display: flex;
  flex-direction: column;
  padding: 180px 48px 0;
`;

export const HeaderHome = styled.div`
  margin: 40px 0 0 38px;
  display: flex;
`;

export const LinkHome = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

export const AboutHome = styled.p`
  color: ${({ theme }) => theme.colors.textGray};
  margin-left: 8px;
`;

export const BodyHome = styled.div`
  z-index: 9;
`;

export const ContentBodyHome = styled.div`
  background: ${({ theme }) => theme.colors.textSecondary};
  background-image: url(${wellIcon});
  background-position: 200% 10%;
  background-repeat: no-repeat;
  position: relative;
  width: 100%;
  height: 600px;
  padding: 40px 40px 40px 70px;
  display: flex;
  margin: 70px 0;
`;

export const TextContent = styled.h1`
  color: ${({ theme }) => theme.colors.textCard};
  font-size: 3.75rem;
  margin: auto 0;
  width: 60%;
`;
