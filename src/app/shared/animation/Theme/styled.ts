import styled from "styled-components";

export const ContainerTheme = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
  max-width: 100%;
  max-height: 100%;
  padding: 0;
`;

export const IconThemes = styled.img`
  width: 40px;
  height: 40px;
  animation: renderTheme 0.2s ease;
  @keyframes renderTheme {
    from {
      opacity: 0;
      width: 0;
    }
    to {
      opacity: 1;
      width: 100%;
    }
  }
`;
