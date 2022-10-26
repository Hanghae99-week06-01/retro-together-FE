import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getPostCommentsThunk } from '../../redux/modules/postCommentsSlice';
import AddPostComments from './AddPostComments';
import PostComment from './PostComment';

const PostComments = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.comments.commentsByTodoId);

  useEffect(() => {
    dispatch(getPostCommentsThunk(id));
  }, [dispatch, id]);

  return (
    <div>
      <div>
        <div>
          <button onClick={() => navigate('/')}>홈</button>
        </div>
      </div>
      <AddPostComments />
      <div>
        {data.map((comment) => (
          <PostComment key={comment.id} comment={comment} />
        ))}
      </div>
    </div>
  );
};

export default PostComments;
