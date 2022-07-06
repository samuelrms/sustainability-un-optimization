import React from "react";
import { ContentContainer } from "./styled";

interface InterfaceContentProps {
  children?: React.ReactNode;
}

export const Content: React.FC<InterfaceContentProps> = ({ children }) => {
  return <ContentContainer>{children}</ContentContainer>;
};
