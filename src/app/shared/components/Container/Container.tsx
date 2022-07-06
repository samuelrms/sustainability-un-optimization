import React from "react";
import { ContainerDefault } from "./styled";

interface InterfaceContainerProps {
  children?: React.ReactNode;
}

export const Container: React.FC<InterfaceContainerProps> = ({ children }) => {
  return <ContainerDefault>{children}</ContainerDefault>;
};
