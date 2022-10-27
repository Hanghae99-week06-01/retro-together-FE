import React from 'react';
import Layout from '../components/Layout';
import Header from '../components/Header';
import styled from 'styled-components';
import Posts from '../features/post/Posts';
import Category from '../components/Category';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const name = sessionStorage.getItem('nickname');

  return (
    <Layout>
      <StHome>
        <Header />
        <StBtn
          onClick={() => {
            navigate('/addpost');
          }}
        >
          {name} 당신의 하루를 기록해주세요
        </StBtn>
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

const StBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  margin: 100px auto 160px auto;

  width: 600px;
  height: 90px;

  font-size: 26px;
  font-weight: 400;

  border: 0px;
  border-radius: 45px;

  background: linear-gradient(220deg, #f7931d, #576f72);

  :hover {
    background: linear-gradient(220deg, #479ca7, #cb1df7);
  }
`;
