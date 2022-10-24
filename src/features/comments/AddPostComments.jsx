import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addPostCommentsThunk } from '../../redux/modules/replySlice';

const AddPostComments = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [comment, setComment] = useState('');

  const onAddComment = () => {
    if (comment.trim() === '') {
      return alert('댓글을 입력해주세요.');
    }
    dispatch(addPostCommentsThunk({ postId: +id, comment }));
    setComment('');
  };

  return (
    <div>
      <textarea
        type="text"
        onChange={(e) => setComment(e.target.value)}
        value={comment}
        placeholder="댓글을 작성하세요"
      />
      <button onClick={onAddComment}>댓글 작성</button>
    </div>
  );
};

export default AddPostComments;
