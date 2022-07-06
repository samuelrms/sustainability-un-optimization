import styled from "styled-components";
import { Container } from "../../shared/components";

export const ContainerError = styled(Container)`
  background: #000;
  width: 100vw;
  height: 100vh;
  display: flex;
  text-align: center;
  h1 {
    margin: auto;
    color: #fff;
    background: #e35;
    border-radius: 5px;
    padding: 5px;
  }
`;
