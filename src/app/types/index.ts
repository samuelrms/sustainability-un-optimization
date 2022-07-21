export type TContentCardObjectives = {
  firstObjective?: string;
  secondObjective?: string;
  thirdObjective?: string;
  fourthObjetive?: string;
  fifthObjective?: string;
};

export type TContentCard = {
  id: number;
  title: string;
  objective: string;
  content: TContentCardObjectives;
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
