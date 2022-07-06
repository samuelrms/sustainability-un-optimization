import React from "react";
import { ButtonDefault } from "./styled";

interface InterfaceButtonProps {
  children?: React.ReactNode;
}

export const Button: React.FC<InterfaceButtonProps> = ({ children }) => {
  return <ButtonDefault>{children}</ButtonDefault>;
};
