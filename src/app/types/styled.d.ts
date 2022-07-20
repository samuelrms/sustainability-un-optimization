import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    name: string;
    colors: {
      primary: string;
      secondary: string;
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
      text: string;
      textCard: string;
    };
  }
}
