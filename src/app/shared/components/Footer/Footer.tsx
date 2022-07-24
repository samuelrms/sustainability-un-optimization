import React from "react";
import { textFooter } from "../../mocks";
import {
  About,
  AboutCreate,
  AboutDescription,
  AboutNavigation,
  AboutTitle,
  BottomFooter,
  ContactCreate,
  ContainerFooter,
  ContentLeft,
  ContentRight,
  ContentWrapper,
  Localization,
  NameCreate,
  NavigationCreate,
  RedesCreate,
  SubTitleContent,
  TitleContent,
  TitleCreate,
  TopFooter,
} from "./styled";

export const Footer = () => {
  return (
    <ContainerFooter>
      <TopFooter>
        <ContentLeft>
          <TitleContent>{textFooter.topFooter.contentLeft.title}</TitleContent>
          <SubTitleContent>
            {textFooter.topFooter.contentLeft.subTitle}
          </SubTitleContent>
          {textFooter.topFooter.contentLeft.localization.map((data, index) => {
            return <Localization key={index}>{data}</Localization>;
          })}
        </ContentLeft>
        <ContentRight>
          <About>
            <AboutTitle>
              {textFooter.topFooter.contentRight.about.title}
              <AboutNavigation
                href={textFooter.topFooter.contentRight.about.link}
                target="_blank"
              >
                ➤
              </AboutNavigation>
            </AboutTitle>
            <AboutDescription>
              {textFooter.topFooter.contentRight.about.aboutDescription}
            </AboutDescription>
          </About>
          <AboutCreate>
            <ContentWrapper>
              <TitleCreate>
                {textFooter.topFooter.contentRight.create.title}
                <AboutNavigation
                  href={textFooter.topFooter.contentRight.create.link}
                  target="_blank"
                >
                  ▼
                </AboutNavigation>
              </TitleCreate>
              <NameCreate>
                {textFooter.topFooter.contentRight.create.createName}
              </NameCreate>
            </ContentWrapper>
            <ContactCreate>
              {textFooter.topFooter.contentRight.create.contact.redes.map(
                (data, index) => {
                  return (
                    <RedesCreate>
                      {data}
                      <NavigationCreate
                        href={
                          textFooter.topFooter.contentRight.create.contact
                            .links[index]
                        }
                        target="_blank"
                      >
                        ➤
                      </NavigationCreate>
                    </RedesCreate>
                  );
                },
              )}
            </ContactCreate>
          </AboutCreate>
        </ContentRight>
      </TopFooter>
      <BottomFooter></BottomFooter>
    </ContainerFooter>
  );
};
