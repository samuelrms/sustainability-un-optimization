import { KeyboardEvent, useContext, useRef } from "react";
import {
  sendDarkIcon,
  sendLightIcon,
  Svgs,
  useOnClickOutside,
  ValueGlobalContext,
} from "../../../../shared";
import {
  Close,
  ContainerUserName,
  ContentGetName,
  GetNameUser,
  TitleName,
  ValidatorName,
} from "./styled";

export const UserName = () => {
  const { userName, setUserName, isName, setIsName, toggle } =
    useContext(ValueGlobalContext);

  const isNameRef = useRef<HTMLDivElement>(null);

  useOnClickOutside<HTMLDivElement>(isNameRef, () => setIsName(!isName));

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleClick();
    }
  };

  const handleClick = () => {
    setIsName(!isName);
    setUserName(userName);
  };

  return isName ? (
    <ContainerUserName ref={isNameRef}>
      <Close onClick={() => setIsName(!isName)}>X</Close>
      <TitleName>
        Por gentileza, nos informe seu nome e sobrenome, para que possa
        comentar.
      </TitleName>

      <ContentGetName>
        <GetNameUser
          onChange={(e) => setUserName(e.target.value)}
          onKeyDown={handleKeyDown}
          value={userName}
          type="text"
        />
        <ValidatorName onClick={handleClick}>
          {toggle && <Svgs src={sendLightIcon} alt="Submit" />}
          {!toggle && <Svgs src={sendDarkIcon} alt="Submit" />}
        </ValidatorName>
      </ContentGetName>
    </ContainerUserName>
  ) : (
    <></>
  );
};
