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
                <div>{comment.content}</div>
                <StCommentsButtonContainer>
                  <button>수정</button>
                  <button onClick={() => onDeleteComment(comment.id)}>
                    삭제
                  </button>
                </StCommentsButtonContainer>
              </StCommentsContainer>
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
`;

const StCommentsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 800px;
  margin: 20px 0;
`;

const StCommentsButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`;
