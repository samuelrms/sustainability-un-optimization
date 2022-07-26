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
  getComment: (id: number) => void;
  postComment: (id: number) => void;
  handleToggleTheme: () => void;
  response?: ICardsState[];
  toggle?: boolean;
  loading?: boolean;
  getCommentsState?: string[];
  postCommentsState?: string;
  userName: string;
  isName?: boolean;
  setIsName: React.Dispatch<React.SetStateAction<boolean>>;
  setGetCommentsState: React.Dispatch<
    React.SetStateAction<string[] | undefined>
  >;
  setPostCommentsState: React.Dispatch<
    React.SetStateAction<string | undefined>
  >;
  setUserName: React.Dispatch<React.SetStateAction<string>>;
}

export type ICardsState = {
  id: number;
  title: string;
  idToBackground: string;
  imageDark: string;
  imageLight: string;
  objective: string;
};

export interface ICardStyle {
  index: number;
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
