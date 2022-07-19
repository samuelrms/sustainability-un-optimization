import styled from "styled-components";

export const ContainerSvg = styled.img`
  max-width: 100%;
  max-height: 100%;
  width: ${({ width }) => width || 40}px;
  height: ${({ height }) => height || 40}px;
`;
