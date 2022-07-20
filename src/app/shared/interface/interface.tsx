import React from "react";

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
