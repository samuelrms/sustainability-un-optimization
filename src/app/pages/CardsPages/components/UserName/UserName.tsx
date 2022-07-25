import { useContext, useRef } from "react";
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

  const isNameRef = useRef(null);

  useOnClickOutside(isNameRef, () => setIsName(!isName));

  return isName ? (
    <ContainerUserName ref={isNameRef}>
      <Close onClick={() => setIsName(!isName)}>X</Close>
      <TitleName>
        Por gentileza precisamos saber seu nome para poder comentar
      </TitleName>

      <ContentGetName>
        <GetNameUser
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          onKeyDown={(e) =>
            e.key === "Enter" && setIsName(!isName) && setUserName(userName)
          }
        />
        <ValidatorName
          onClick={() => setIsName(!isName) && setUserName(userName)}
        >
          {!toggle && <Svgs src={sendLightIcon} alt="Submit" />}
          {toggle && <Svgs src={sendDarkIcon} alt="Submit" />}
        </ValidatorName>
      </ContentGetName>
    </ContainerUserName>
  ) : (
    <></>
  );
};
