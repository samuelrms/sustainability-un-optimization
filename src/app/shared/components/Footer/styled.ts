import styled from "styled-components";

export const ContainerFooter = styled.footer`
  background: ${({ theme }) => theme.colors.footer};
  display: flex;
  padding: 50px 30px;
  flex-direction: column;
  align-content: space-between;
  color: ${({ theme }) => theme.colors.text};
`;

export const TopFooter = styled.div`
  display: flex;
`;

export const ContentLeft = styled.div`
  width: 50%;
  padding-right: 40px;
`;

export const TitleContent = styled.h2`
  padding-bottom: 50px;
`;

export const SubTitleContent = styled.h3`
  width: 100%;
  text-align: justify;
  margin-bottom: 30px;
`;

export const Localization = styled.p`
  margin-bottom: 10px;
`;

export const ContentRight = styled.div`
  width: 50%;
  padding: 40px 0 40px 40px;
  flex-direction: column;
`;

export const About = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  padding-bottom: 50px;
`;

export const AboutTitle = styled.h2`
  padding-bottom: 15px;
`;

export const AboutNavigation = styled.a`
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  padding-left: 10px;
`;

export const ContentWrapper = styled.div``;

export const NameCreate = styled.h2`
  padding: 0 30px;
`;

export const AboutDescription = styled.p``;

export const AboutCreate = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: row-reverse;
  justify-content: space-between;
`;

export const ContactCreate = styled.div`
  display: flex;
  width: 20%;
  flex-direction: column;
`;

export const TitleCreate = styled(AboutTitle)``;

export const RedesCreate = styled(AboutDescription)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NavigationCreate = styled(AboutNavigation)`
  padding: 5px;
`;

export const BottomFooter = styled.div``;
