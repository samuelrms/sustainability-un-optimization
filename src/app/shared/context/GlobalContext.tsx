import { createContext, useEffect, useState } from "react";
import { getCard, getComment, postComment } from "../../services";
import { usePersistedState } from "../hooks";
import { IGlobalContextProps, IGlobalContext, ICardsState } from "../interface";
import { lightTheme } from "../../styles";

export const ValueGlobalContext = createContext<IGlobalContextProps>(
  {} as IGlobalContextProps,
);

export const GlobalContext = ({ children }: IGlobalContext) => {
  const [toggle, setToggle] = usePersistedState("Theme", lightTheme);
  const [response, setResponse] = useState<ICardsState[]>();
  const [loading, setLoading] = useState<boolean>();
  const [getCommentsState, setGetCommentsState] = useState<string[]>();
  const [postCommentsState, setPostCommentsState] = useState<string>();
  const [userName, setUserName] = useState<string>("");
  const [isName, setIsName] = useState<boolean>(false);
  // usePersistedState

  useEffect(() => {
    getCard(setResponse, setLoading);
  }, [loading]);

  const handleToggleTheme = () => {
    setToggle(!toggle);
  };

  useEffect(() => {
    const saveLocalStorageName = JSON.stringify(userName);
    Boolean(userName?.trim().length) &&
      window?.localStorage?.setItem("Name", saveLocalStorageName);
  }, [userName]);

  useEffect(() => {
    const getLocalStorageName = window.localStorage.getItem("Name");
    if (getLocalStorageName !== null && !userName?.trim().length) {
      const localName = JSON.parse(getLocalStorageName);
      setUserName(localName);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const themeContextToggleAndState: IGlobalContextProps = {
    getComment: (id: number) => getComment(id, setGetCommentsState),
    postComment: (id: number) => postComment(id, postCommentsState, userName),
    handleToggleTheme: handleToggleTheme,
    postCommentsState: postCommentsState,
    response: response,
    loading: loading,
    toggle: toggle,
    userName: userName,
    isName: isName,
    setIsName: setIsName,
    setUserName: setUserName,
    getCommentsState: getCommentsState,
    setGetCommentsState: setGetCommentsState,
    setPostCommentsState: setPostCommentsState,
  };

  return (
    <ValueGlobalContext.Provider value={themeContextToggleAndState}>
      {children}
    </ValueGlobalContext.Provider>
  );
};
