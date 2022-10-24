import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { useParams } from 'react-router-dom';
import { getPostCommentsThunk } from '../redux/modules/postCommentsSlice';

const PostCommentItem = () => {
  const dispatch = useDispatch();
  // const { id } = useParams();
  const comment = useSelector((state) => state);
  console.log(comment);

  useEffect(() => {
    dispatch(getPostCommentsThunk());
  }, [dispatch]);

  return (
    <div>
      {comment.map((item) => {
        return (
          <div key={item.id}>
            <div>{item.comment}</div>
          </div>
        );
      })}
    </div>
  );
};

export default PostCommentItem;
