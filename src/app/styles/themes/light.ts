import {
  borderBottomLight,
  eighthCard,
  fifthCard,
  firstCard,
  fourthCard,
  lightBackground,
  lightSecondaryBackground,
  ninthCard,
  searchFocusLight,
  searchLight,
  secondCard,
  seventhCard,
  sixthCard,
  tenthCard,
  textCard,
  textGrayLight,
  textLight,
  textLightSecondary,
  thirdCard,
  unLocalization,
} from "./variableColors";

export const lightTheme = {
  name: "light",
  colors: {
    primary: lightBackground,
    secondary: lightSecondaryBackground,
    borderBottomTab: borderBottomLight,
    unLocalization: unLocalization,
    text: textLight,
    textSecondary: textLightSecondary,
    textGray: textGrayLight,
    textCard: textCard,
    search: searchLight,
    searchFocus: searchFocusLight,
    cards: {
      0: firstCard,
      1: secondCard,
      2: thirdCard,
      3: fourthCard,
      4: fifthCard,
      5: sixthCard,
      6: seventhCard,
      7: eighthCard,
      8: ninthCard,
      9: tenthCard,
    },
  },
};
