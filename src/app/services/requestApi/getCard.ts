import { url } from "../api";

export const getCard = async (
  setResponse: (props?: any) => void,
  setLoading: (props?: boolean) => void,
) => {
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
