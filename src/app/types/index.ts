export type TContentCard = {
  id: number;
  title: string;
  objective: string;
};

export type TCard = {
  firstCard: TContentCard;
  secondCard: TContentCard;
  thirdCard: TContentCard;
  fourthCard: TContentCard;
  fifthCard: TContentCard;
  sixthCard: TContentCard;
  seventhCard: TContentCard;
  eighthCard: TContentCard;
  ninthCard: TContentCard;
  tenthCard: TContentCard;
};

export type TContentCardData = {
  data: TContentCard;
};
