import { url } from "../api";

export const getComment = async (
  idCard: number,
  setGetCommentsState: (props?: any) => void,
) => {
  try {
    const { data } = await url.get(`/comments/card_${idCard}`);
    if (Boolean(data)) {
      setGetCommentsState(data);
    }
  } catch (err) {
    console.log(err);
  }
};
