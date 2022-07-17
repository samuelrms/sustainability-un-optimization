import React from "react";
import { ButtonDefault } from "./styled";

interface InterfaceButtonProps {
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
  children: React.ReactNode;
}

export const Button: React.FC<InterfaceButtonProps> = ({
  children,
  onClick,
}) => {
  return <ButtonDefault onClick={onClick}>{children}</ButtonDefault>;
};
