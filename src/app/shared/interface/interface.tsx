import React from "react";
import { TContentCardObjectives } from "../../types";

export interface ISgv {
  src: string;
  width?: number;
  alt: string;
  height?: number;
  fill?: string;
}

export interface IToggleThemeContext {
  children?: React.ReactNode;
}

export interface IGlobalThemeContext {
  toggle?: boolean;
  setIsTheme?: () => void;
  handleToggle?: () => void;
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
