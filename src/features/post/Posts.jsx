import React, { useEffect } from 'react';
import { __getPostThunk } from '../../redux/modules/postsSlice';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import Card from '../../components/Card';

const Posts = () => {
  const posts = useSelector((state) => state.posts.posts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(__getPostThunk());
  }, [dispatch]);
  return (
    <div>
      <StCardList>
        {posts.map((post) => (
          <Card key={post.id} post={post} />
        ))}
      </StCardList>
    </div>
  );
};

export default Posts;

const StCardList = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;
