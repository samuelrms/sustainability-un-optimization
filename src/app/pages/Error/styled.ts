import styled from "styled-components";
import { Container } from "../../shared/components";

export const ContainerError = styled(Container)`
  background: #000;
  width: 100vw;
  height: 100vh;
  display: flex;
  text-align: center;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h1 {
    color: #fff;
    background: #e35;
    border-radius: 5px;
    padding: 5px;
  }
`;
