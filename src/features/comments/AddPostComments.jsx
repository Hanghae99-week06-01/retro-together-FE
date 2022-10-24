import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
// import { useParams } from 'react-router-dom';
import { addPostCommentsThunk } from '../../redux/modules/postCommentsSlice';
import styled from 'styled-components';

const AddPostComments = () => {
  const dispatch = useDispatch();
  // const { id } = useParams();
  const [content, setComment] = useState('');

  const onAddComment = () => {
    if (content.trim() === '') {
      return alert('댓글을 입력해주세요.');
    }
    dispatch(addPostCommentsThunk({ content }));
    setComment('');
  };

  const onKeyPress = (e) => {
    if (e.key === 'Enter') onAddComment();
  };

  return (
    <StComments>
      <StCommentsContainer>
        <h3>0개의 댓글</h3>
        <Textarea
          type="text"
          onChange={(e) => setComment(e.target.value)}
          value={content}
          placeholder="댓글을 작성하세요"
          onKeyPress={onKeyPress}
        />
        <StButtonWrapper>
          <button onClick={onAddComment}>댓글 작성</button>
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
  padding: 16 16 24px;
`;

const StButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
