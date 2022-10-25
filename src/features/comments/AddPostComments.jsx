import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addPostCommentsThunk } from '../../redux/modules/postCommentsSlice';
import styled from 'styled-components';

const AddPostComments = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { comments } = useSelector((state) => state.postCommentsSlice);
  const [content, setComment] = useState('');

  const onAddComment = () => {
    if (content.trim() === '') {
      return alert('댓글을 입력해주세요.');
    }
    dispatch(addPostCommentsThunk({ todoId: id, content }));
    setComment('');
  };

  const onKeyPress = (e) => {
    if (e.key === 'Enter') onAddComment();
  };

  return (
    <StComments>
      <StCommentsContainer>
        <h3>{comments.length} 개의 댓글</h3>
        <Textarea
          type="text"
          onChange={(e) => setComment(e.target.value)}
          value={content}
          placeholder="댓글을 작성하세요"
          onKeyPress={onKeyPress}
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
