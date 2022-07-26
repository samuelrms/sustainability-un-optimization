import { url } from "../api";

export const postComment = async (
  IDCard: number,
  postCommentsState?: string,
  userName?: string,
) => {
  try {
    await url
      .post(`/comments/card_${IDCard}`, {
        comment: postCommentsState,
        name: `${userName?.[0]?.toLocaleUpperCase()}${userName?.substring(1)}`,
      })
      .then()
      .catch(function (error) {
        console.log({ error });
      });
  } catch (err) {
    console.log({ err });
  }
};
