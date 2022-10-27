import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  deletePostCommentsThunk,
  editPostCommentsThunk,
} from '../../redux/modules/postCommentsSlice';
import styled from 'styled-components';
import {
  clearComment,
  getPostCommentThunk,
  globalEditModeToggle,
} from '../../redux/modules/postCommentSlice';
// import CommentsLike from './CommentsLike';

const PostComment = ({ comment }) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [isEdit, setIsEdit] = useState(false);
  const [updatedComment, setUpdatedComment] = useState('');

  const { content } = useSelector((state) => state.comment.data);
  const { isGlobalEditmode } = useSelector((state) => state.comment);

  const onDeleteComment = () => {
    const result = window.confirm('삭제하시겠습니까?');
    if (result) {
      dispatch(deletePostCommentsThunk(comment.id));
    } else {
      return;
    }
  };

  const onUpdateComment = () => {
    dispatch(
      editPostCommentsThunk({
        id: comment.id,
        content: updatedComment,
        postId: id,
      })
    );
    setIsEdit(false);
    dispatch(globalEditModeToggle(false));
  };

  const onEditComment = () => {
    setIsEdit(true);
    dispatch(getPostCommentThunk(comment.id));
    dispatch(globalEditModeToggle(true));
  };

  const onCancelComment = () => {
    setIsEdit(false);
    dispatch(clearComment());
    dispatch(globalEditModeToggle(false));
  };

  useEffect(() => {
    setUpdatedComment(content);
  }, [content]);

  const onEnter = (e) => {
    if (e.key === 'Enter') onUpdateComment();
  };

  return (
    <StComments>
      {isEdit ? (
        <>
          <StComments>
            <StCommentsContainer>
              <Textarea
                type="text"
                onChange={(e) => {
                  setUpdatedComment(e.target.value);
                }}
                value={updatedComment}
                onKeyPress={onEnter}
              />
              <StCommentsButtonContainer>
                <StCommentsButton onClick={onCancelComment}>
                  취소
                </StCommentsButton>
                <StCommentsButton onClick={onUpdateComment}>
                  저장
                </StCommentsButton>
              </StCommentsButtonContainer>
            </StCommentsContainer>
          </StComments>
        </>
      ) : (
        <>
          <StComments>
            <StCommentsContainer>
              <div>사용자</div>
              <StCommentsButtonContainer>
                <StCommentsButton
                  onClick={onEditComment}
                  disabled={isGlobalEditmode}
                >
                  수정
                </StCommentsButton>
                <StCommentsButton
                  onClick={onDeleteComment}
                  disabled={isGlobalEditmode}
                >
                  삭제
                </StCommentsButton>
              </StCommentsButtonContainer>
            </StCommentsContainer>
            <div className="댓글 내용">
              <div>{comment.content}</div>
            </div>
          </StComments>
          {/* <CommentsLike /> */}
        </>
      )}
    </StComments>
  );
};

export default PostComment;

const StComments = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const StCommentsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 800px;
  height: 50px;
  margin: 20px 0;
`;

const StCommentsButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const StCommentsButton = styled.span`
  background-color: #808080;
  color: white;
  border-radius: 3px;
  width: 35px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
`;

const Textarea = styled.textarea`
  /* width: 800px;
  height: 70px;
  margin: 0 0 24px;
  padding: 10px 10px 24px; */
  font-size: 16px;
`;
