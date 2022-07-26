import { createContext, useEffect, useState } from "react";
import { getCard, getComment, postComment } from "../../services";
import { usePersistedState } from "../hooks";
import { IGlobalContextProps, IGlobalContext, ICardsState } from "../interface";
import { lightTheme } from "../../styles";

export const ValueGlobalContext = createContext<IGlobalContextProps>(
  {} as IGlobalContextProps,
);

export const GlobalContext = ({ children }: IGlobalContext) => {
  const [toggle, setToggle] = usePersistedState<boolean>("Theme", lightTheme);
  const [userName, setUserName] = usePersistedState<string>("Name", null);
  const [postCommentsState, setPostCommentsState] = useState<string>();
  const [getCommentsState, setGetCommentsState] = useState<string[]>();
  const [response, setResponse] = useState<ICardsState[]>();
  const [isName, setIsName] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>();

  useEffect(() => {
    getCard(setResponse, setLoading);
  }, [loading]);

  const handleToggleTheme = () => {
    setToggle(!toggle);
  };

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
