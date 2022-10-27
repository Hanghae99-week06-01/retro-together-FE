import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { addPostCommentsThunk } from '../../redux/modules/postCommentsSlice';

const AddPostComments = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { data } = useSelector((state) => state.comments.commentsByTodoId.data);
  const [comment, setComment] = useState({
    content: '',
  });

  const onChangeComment = (e) => {
    const { name, value } = e.target;
    setComment({ ...comment, [name]: value });
  };

  const onAddComment = () => {
    if (comment.content.trim() === '') {
      return alert('댓글을 입력해주세요.');
    }
    dispatch(addPostCommentsThunk({ postId: +id, ...comment }));
    setComment({
      content: '',
    });
  };

  const onEnter = (e) => {
    if (e.key === 'Enter') onAddComment();
  };

  return (
    <StComments>
      <StCommentsContainer>
        <h3>{data.length} 개의 댓글</h3>
        <Textarea
          type="text"
          name="content"
          onChange={onChangeComment}
          onKeyPress={onEnter}
          value={comment.content}
          placeholder="댓글을 작성하세요"
        />
        <StButtonWrapper>
          <StCommentsButton onClick={onAddComment}>댓글 작성</StCommentsButton>
        </StButtonWrapper>
      </StCommentsContainer>
    </StComments>
  );
};

export default AddPostComments;

const StComments = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StCommentsContainer = styled.div`
  display: block;
`;

const Textarea = styled.textarea`
  width: 1000px;
  max-width: 1440px;
  height: 100px;

  margin: 20px auto 10px auto;
  padding: 10px 10px 24px;

  font-size: 18px;
  font-weight: 500;

  border-radius: 5px;
  background-color: #424242;

  ::placeholder {
    font-size: 18px;
    font-weight: 500;
    font-style: italic;
  }
`;

const StButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const StCommentsButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 18px;
  font-weight: 500;

  width: 150px;
  height: 40px;

  border: 0px;
  border-radius: 5px;
  background-color: #576f72;

  :hover {
    background-color: #f7931d;
  }
`;
