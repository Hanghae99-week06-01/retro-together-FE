import React from 'react';
import PostCommentItem from '../components/PostCommentItem';
import AddPostComments from '../features/comments/AddPostComments';

const PostComments = () => {
  return (
    <div>
      <AddPostComments />
      <PostCommentItem />
    </div>
  );
};

export default PostComments;
