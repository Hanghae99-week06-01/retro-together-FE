import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPostCommentsThunk } from '../redux/modules/replySlice';

const PostCommentItem = () => {
  const dispatch = useDispatch();
  const comment = useSelector((state) => state.replySlice);
  console.log(comment);

  useEffect(() => {
    dispatch(getPostCommentsThunk());
  }, [dispatch]);

  return <div>안녕</div>;
};

export default PostCommentItem;
