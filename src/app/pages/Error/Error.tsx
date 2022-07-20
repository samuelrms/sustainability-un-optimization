import React from "react";
import { useNavigate } from "react-router-dom";
import { ButtonError, ContainerError } from "./styled";

export const Error = () => {
  const navigation = useNavigate();

  const handleClick = () => {
    navigation("/");
  };

  return (
    <ContainerError>
      <h1>
        Acreditamos que você esteja no local errado , por gentileza clique no
        botão abaixo para retornar para pagina inicial
      </h1>
      <ButtonError onClick={handleClick}>Retornar a pagina inicial</ButtonError>
    </ContainerError>
  );
};
