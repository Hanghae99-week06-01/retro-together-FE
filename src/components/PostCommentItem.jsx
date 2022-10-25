import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { useParams } from 'react-router-dom';
import {
  deletePostCommentsThunk,
  editPostCommentsThunk,
  getPostCommentsThunk,
} from '../redux/modules/postCommentsSlice';
import styled from 'styled-components';

const PostCommentItem = () => {
  const dispatch = useDispatch();
  // const { id } = useParams();
  const { comments } = useSelector((state) => state.postCommentsSlice);
  const [editComment, setEditComment] = useState('');
  const [isEditMode, setIsEditMode] = useState(false);

  useEffect(() => {
    dispatch(getPostCommentsThunk());
  }, [dispatch]);

  const onDeleteComment = (id) => {
    const result = window.confirm('삭제하시겠습니까?');
    if (result) {
      dispatch(deletePostCommentsThunk(id));
    } else {
      return;
    }
  };

  const onEditComment = () => {
    if (editComment.trim() === '') {
      return alert('내용을 입력해주세요.');
    }
    dispatch(
      editPostCommentsThunk({
        ...comments,
        content: editComment,
      })
    );
    setIsEditMode(false);
  };

  return (
    <>
      <StComments>
        {comments.map((comment) => {
          return (
            <StComments key={comment.id}>
              <StCommentsContainer>
                <div>사용자</div>
                <StCommentsButtonContainer>
                  <StCommentsButton>수정</StCommentsButton>
                  <StCommentsButton onClick={() => onDeleteComment(comment.id)}>
                    삭제
                  </StCommentsButton>
                </StCommentsButtonContainer>
              </StCommentsContainer>
              <div>
                <div>{comment.content}</div>
              </div>
            </StComments>
          );
        })}
      </StComments>
    </>
  );
};

export default PostCommentItem;

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
