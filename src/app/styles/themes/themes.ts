import {
  darkBackground,
  firstCard,
  firstCardDark,
  lightBackground,
  textCard,
  textCardDark,
  textDark,
  textLight,
} from "./variableColors";

export const darkMode = {
  body: darkBackground,
  cards: {
    firstCard: firstCardDark,
  },
  text: textDark,
  textCard: textCardDark,
};

export const lightMode = {
  body: lightBackground,
  cards: {
    firstCard: firstCard,
  },
  text: textLight,
  textCard: textCard,
};
