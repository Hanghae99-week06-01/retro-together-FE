import React from 'react';
import Layout from '../components/Layout';
import PostCommentItem from '../components/PostCommentItem';
import AddPostComments from '../features/comments/AddPostComments';

const PostComments = () => {
  return (
    <Layout>
      <AddPostComments />
      <PostCommentItem />
    </Layout>
  );
};

export default PostComments;
