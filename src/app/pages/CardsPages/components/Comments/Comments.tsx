import { useLocation } from "react-router-dom";
import { useContext, useEffect } from "react";
import { ValueGlobalContext } from "../../../../shared";
import { Comment, CommentsContent, ContainerComments } from "./styled";

export const Comments = () => {
  const location = useLocation();
  const { card }: any = location.state;
  const { id }: any = card;
  const {
    getComment,
    getCommentsState,
    postComment,
    setPostCommentsState,
    postCommentsState,
  } = useContext(ValueGlobalContext);

  useEffect(() => {
    getComment(id);
  }, [id, getComment]);

  const handleClick = () => {
    postComment(id);
  };

  const changeComments = (e: any) => {
    setPostCommentsState(e.target.value);
  };

  const keyPostComments = (e: any) => {
    e.key === "Enter" && postComment(id);
  };

  const clearInput = (e: any) => {
    changeComments(e);
    keyPostComments(e);
    setPostCommentsState([...setPostCommentsState]);
  };

  return (
    <ContainerComments>
      <CommentsContent>
        {getCommentsState?.map((data: any) => {
          return (
            <Comment key={data.id}>
              <li>{data.comment}</li>
              <li>{data.name}</li>
            </Comment>
          );
        })}
      </CommentsContent>
      <input
        type="text"
        value={postCommentsState}
        onChange={(e) => clearInput(e)}
        onKeyDown={(e) => clearInput(e)}
      />
      <button onClick={handleClick}>env</button>
    </ContainerComments>
  );
};
