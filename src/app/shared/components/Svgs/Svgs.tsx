import React from "react";
import { ContainerSvg } from "./styled";
import { ISgv } from "./../../interface/interface";

export const Svgs = ({ src, alt }: ISgv) => {
  return <ContainerSvg src={src} alt={alt} />;
};
