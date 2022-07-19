import React from "react";

export interface ISgv {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export interface IToggleThemeContext {
  children?: React.ReactNode;
}

export interface IGlobalThemeContext {
  toggle?: boolean;
  setToggle?: any;
  setIsTheme?: () => void;
  handleToggle?: () => void;
}
