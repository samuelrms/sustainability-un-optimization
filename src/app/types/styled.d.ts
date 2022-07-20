import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    name: string;
    colors: {
      primary: string;
      secondary: string;
      borderBottomTab: string;
      unLocalization: string;
      text: string;
      textCard: string;
      search: string;
      searchFocus: string;
      cards: {
        firstCard: string;
        secondCard: string;
        thirdCard: string;
        fourthCard: string;
        fifthCard: string;
        sixthCard: string;
        seventhCard: string;
        eighthCard: string;
        ninthCard: string;
        tenthCard: string;
      };
    };
  }
}
