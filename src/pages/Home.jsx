import React from 'react';
import Layout from '../components/Layout';
import Header from '../components/Header';
import styled from 'styled-components';
import Posts from '../features/post/Posts';
import Category from '../components/Category';
import { useNavigate } from 'react-router-dom';
import PostBtn from '../features/post/PostBtn';

const Home = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <StHome>
        <Header />
        <PostBtn />
        <Category />
        <Posts />
      </StHome>
    </Layout>
  );
};

export default Home;

const StHome = styled.div`
  display: block;
`;
