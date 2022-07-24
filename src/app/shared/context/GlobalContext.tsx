import { createContext, useEffect, useState } from "react";
import { url } from "../../services";
import {
  IGlobalContextProps,
  IGlobalContext,
  ICardsState,
} from "../interface/interface";

export const ValueGlobalContext = createContext<IGlobalContextProps>(
  {} as IGlobalContextProps,
);

export const GlobalContext = ({ children }: IGlobalContext) => {
  const [toggle, setToggle] = useState<boolean>();
  const [response, setResponse] = useState<ICardsState[]>();
  const [loading, setLoading] = useState<boolean>();
  const [getCommentsState, setGetCommentsState] = useState<any>();
  const [postCommentsState, setPostCommentsState] = useState<string>();

  useEffect(() => {
    getCard();
  }, [loading]);

  const getCard = async () => {
    try {
      const { data } = await url.get("/cards");
      const { cards } = data;
      if (Boolean(cards)) {
        setResponse(cards);
        setLoading(true);
      } else {
        setLoading(false);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const getComment = async (idCard: number) => {
    try {
      const { data } = await url.get(`/comments/card_${idCard}`);
      if (Boolean(data)) {
        setGetCommentsState(data);
      } else {
        console.log("Erro");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const postComment = async (IDCard: number) => {
    try {
      const data = await url
        .post(`/comments/card_${IDCard}`, {
          comment: postCommentsState,
          name: "teste",
        })
        .then(function (response: any) {
          console.log(response);
        })
        .catch(function (error: any) {
          console.log(error);
        });

      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const themeContextToggleAndState: IGlobalContextProps = {
    toggle: toggle,
    handleToggle: handleToggle,
    response: response,
    loading: loading,
    getComment: getComment,
    getCommentsState: getCommentsState,
    setPostCommentsState: setPostCommentsState,
    postComment: postComment,
    postCommentsState: postCommentsState,
  };

  return (
    <ValueGlobalContext.Provider value={themeContextToggleAndState}>
      {children}
    </ValueGlobalContext.Provider>
  );
};
