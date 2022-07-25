import { createContext, useEffect, useState } from "react";
import { getCard, getComment, postComment } from "../../services";
import { IGlobalContextProps, IGlobalContext, ICardsState } from "../interface";

export const ValueGlobalContext = createContext<IGlobalContextProps>(
  {} as IGlobalContextProps,
);

export const GlobalContext = ({ children }: IGlobalContext) => {
  const [toggle, setToggle] = useState<boolean>();
  const [response, setResponse] = useState<ICardsState[]>();
  const [loading, setLoading] = useState<boolean>();
  const [getCommentsState, setGetCommentsState] = useState<string[]>();
  const [postCommentsState, setPostCommentsState] = useState<string>();
  const [userName, setUserName] = useState<string>();
  const [isName, setIsName] = useState<boolean>(false);

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

    // Falta colocar type
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
