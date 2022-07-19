import React from "react";
import { ContainerSvg } from "./styled";
import { ISgv } from "./../../interface/interface";

export const Svgs = ({ src, alt, height, width }: ISgv) => {
  return <ContainerSvg src={src} alt={alt} height={height} width={width} />;
};
