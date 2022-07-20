import {
  darkBackground,
  darkSecondaryBackground,
  eighthCardDark,
  fifthCardDark,
  firstCardDark,
  fourthCardDark,
  ninthCardDark,
  secondCardDark,
  seventhCardDark,
  sixthCardDark,
  tenthCardDark,
  textCardDark,
  textDark,
  thirdCardDark,
} from "./variableColors";

export const darkTheme = {
  name: "dark",
  colors: {
    primary: darkBackground,
    secondary: darkSecondaryBackground,
    cards: {
      firstCard: firstCardDark,
      secondCard: secondCardDark,
      thirdCard: thirdCardDark,
      fourthCard: fourthCardDark,
      fifthCard: fifthCardDark,
      sixthCard: sixthCardDark,
      seventhCard: seventhCardDark,
      eighthCard: eighthCardDark,
      ninthCard: ninthCardDark,
      tenthCard: tenthCardDark,
    },
    text: textDark,
    textCard: textCardDark,
  },
};
