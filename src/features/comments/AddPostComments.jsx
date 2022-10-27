import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { addPostCommentsThunk } from '../../redux/modules/postCommentsSlice';

const AddPostComments = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { data } = useSelector((state) => state.comments.commentsByTodoId);
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
  width: 800px;
  height: 70px;
  margin: 0 0 24px;
  padding: 10px 10px 24px;
  font-size: 16px;
  ::placeholder {
    font-size: large;
    font-weight: 500;
    font-style: italic;
  }
`;

const StButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const StCommentsButton = styled.span`
  background-color: #12b886;
  color: white;
  border-radius: 5px;
  width: 100px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
