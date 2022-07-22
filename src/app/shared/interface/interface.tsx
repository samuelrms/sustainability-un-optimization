import React from "react";
import { TContentCardObjectives } from "../../types";

export interface ISgv {
  src: string;
  width?: number;
  alt: string;
  height?: number;
  fill?: string;
}

export interface IGlobalContext {
  children?: React.ReactNode;
}

export interface IGlobalContextProps {
  toggle?: boolean;
  setIsTheme?: () => void;
  handleToggle?: () => void;
  response?: ICardsState[];
  loading?: boolean;
}

export type ICardsState = {
  title: string;
  content: TContentCardObjectives;
  idToBackground: string;
  id: number;
  imageDark: string;
  imageLight: string;
  objective: string;
};

export interface ICardStyle {
  index?: number;
}
