import React from 'react';
import Layout from '../components/Layout';
import PostCommentItem from '../components/PostCommentItem';
import AddPostComments from '../features/comments/AddPostComments';
import PostComments from './PostComments';

const Detail = () => {
  return (
    <Layout>
      <AddPostComments />
      <PostCommentItem />
    </Layout>
  );
};

export default Detail;
