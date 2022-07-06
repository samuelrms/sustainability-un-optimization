import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../shared/components";
import { ContainerError } from "./styled";

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
      <Button onClick={handleClick}>Retornar a pagina inicial</Button>
    </ContainerError>
  );
};
