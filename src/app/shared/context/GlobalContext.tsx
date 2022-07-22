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

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const themeContextToggleAndState: IGlobalContextProps = {
    toggle: toggle,
    handleToggle: handleToggle,
    response: response,
    loading: loading,
  };

  return (
    <ValueGlobalContext.Provider value={themeContextToggleAndState}>
      {children}
    </ValueGlobalContext.Provider>
  );
};
