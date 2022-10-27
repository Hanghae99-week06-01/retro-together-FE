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
  const { data } = useSelector((state) => state.comments.commentsByTodoId.data);
  const loading = useSelector((state) => state.comments.commentsByTodoId.data);
  const { isLoading, error } = useSelector(
    (state) => state.comments.commentsByTodoId
  );

  useEffect(() => {
    dispatch(getPostCommentsThunk(id));
  }, [dispatch, id]);

  if (isLoading || loading.length <= 0) return <div>로딩입니다.</div>;

  if (error) return <div>에러입니다.</div>;

  return (
    <div>
      <AddPostComments />
      {data.map((comment) => (
        <PostComment key={comment.id} comment={comment} />
      ))}
    </div>
  );
};

export default PostComments;
