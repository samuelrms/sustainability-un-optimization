import { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  sendDarkIcon,
  sendLightIcon,
  Svgs,
  ValueGlobalContext,
} from "../../../../shared";
import { UserName } from "../UserName/UserName";
import {
  Comment,
  CommentsContent,
  ContainerComments,
  CommentText,
  Submit,
  ContentTextAndSubmit,
  TitleContent,
  DataComment,
  DataCommentName,
} from "./styled";

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
    toggle,
    isName,
    setIsName,
    userName,
  } = useContext(ValueGlobalContext);

  useEffect(() => {
    getComment(id);
  }, [getComment, id]);

  const conditionToComment = () => {
    if (postCommentsState?.trim().length) {
      postComment(id);
      setPostCommentsState("");
    }
  };

  const changeComments = (e: any) => {
    setPostCommentsState(e.target.value);
  };

  const handleClick = () => {
    conditionToComment();
  };

  const handleKeyDownListCards = (e: any) => {
    if (e.key === "Enter") {
      conditionToComment();
    }
  };

  const teste = () => {
    Boolean(!userName?.length) && setIsName(!isName);
  };

  return (
    <ContainerComments>
      <TitleContent>
        Conte-nos se você acredita que iremos conseguir, se não acredita
        descreva o motivo por gentileza.
      </TitleContent>
      <ContentTextAndSubmit>
        <CommentText
          type="text"
          value={postCommentsState}
          onChange={(e) => changeComments(e)}
          onKeyDown={(e) => handleKeyDownListCards(e)}
          onClick={teste}
        />
        <UserName />
        <Submit onClick={handleClick}>
          {!toggle && <Svgs src={sendLightIcon} alt="Submit" />}
          {toggle && <Svgs src={sendDarkIcon} alt="Submit" />}
        </Submit>
      </ContentTextAndSubmit>
      <CommentsContent>
        {getCommentsState?.map((data: any) => {
          return (
            <Comment key={data?.id}>
              <DataComment>{data?.comment}</DataComment>
              {data?.name && <DataCommentName>{data?.name}</DataCommentName>}
            </Comment>
          );
        })}
      </CommentsContent>
    </ContainerComments>
  );
};
