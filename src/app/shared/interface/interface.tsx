import React from "react";

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
  getComment?: any;
  getCommentsState?: any;
  postComment?: any;
  setPostCommentsState?: any;
  postCommentsState: any;
}

export type ICardsState = {
  title: string;
  idToBackground: string;
  id: number;
  imageDark: string;
  imageLight: string;
  objective: string;
};

export interface ICardStyle {
  index?: number;
}

export interface ILocationState {
  card: {
    content: Array<string>;
    id: number;
    idToBackground: string;
    imageDark: string;
    imageLight: string;
    objective: string;
    title: string;
  };
}
