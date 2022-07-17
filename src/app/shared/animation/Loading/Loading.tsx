import React from "react";
import Lottie from "react-lottie";
import * as loadingAnimation from "../animations/loading.json";
import { ContainerLoading } from "./styled";

export const Loading = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loadingAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid cover",
    },
  };
  return (
    <ContainerLoading>
      <Lottie options={defaultOptions} height="50%" width="100%" />
    </ContainerLoading>
  );
};
