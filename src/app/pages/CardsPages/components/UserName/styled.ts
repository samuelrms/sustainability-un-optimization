import styled from "styled-components";

export const ContainerUserName = styled.div`
  z-index: 100;
  position: fixed;
  left: 0;
  right: 0;
  margin: auto;
  width: 90vw;
  max-width: 1440px;
  height: 53vh;
  background: rgba(255, 255, 255, 0.35);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(13.5px);
  border-radius: 10px;
  padding: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.text};
`;

export const Close = styled.button`
  background: rgba(255, 255, 255, 0.35);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(13.5px);
  width: 35px;
  height: 35px;
  border-radius: 50%;
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TitleName = styled.h3`
  padding: 10px;
  margin-bottom: 30px;
  color: #000;
`;

export const ContentGetName = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const GetNameUser = styled.input`
  width: 50%;
  border: 1px solid ${({ theme }) => theme.colors.textGray};
  padding: 10px 20px;
  border-radius: 10px;
`;

export const ValidatorName = styled.button`
  background: transparent;
  cursor: pointer;
`;
