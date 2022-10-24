import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import Header from '../components/Header';
import Banner from '../components/Banner';
import styled from 'styled-components';
import Card from '../components/Card';
import { __getPostThunk } from '../redux/modules/postsSlice';
import { useSelector, useDispatch } from 'react-redux';

const Home = () => {
  const posts = useSelector((state) => state.posts.posts);
  console.log(posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(__getPostThunk());
  }, [dispatch]);

  return (
    <Layout>
      <Header />
      <Banner />

      <div>
        <Stbox>
          <Stboxtop>
            <Stsearch placeholder="#테그검색" />
            <Stbut> 검색</Stbut>
          </Stboxtop>
          <Stboxbottom>
            <StCategory>#React</StCategory>
            <StCategory>#Spring</StCategory>
            <StCategory>#Javascript</StCategory>
            <StCategory>#Java</StCategory>
            <StCategory>#Python</StCategory>
            <StCategory>#Vue</StCategory>
            <StCategory>#Typescript</StCategory>
            <StCategory>#Node</StCategory>
          </Stboxbottom>
        </Stbox>
      </div>
      <Stcardoutline>
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {posts.map((post) => (
            <Card key={post.id} post={post} />
          ))}
        </div>
      </Stcardoutline>
    </Layout>
  );
};

export default Home;

const StHometop = styled.div``;

const Stboxtop = styled.div`
  margin: 8px auto;
  justify-content: center;
  align-items: center;
  display: block;
  text-align: center;
  width: 100%;
`;
const Stboxbottom = styled.div`
  margin: 20px auto;
  display: block;
  align-items: center;
  text-align: center;
`;

const Stsearch = styled.input`
  align-items: center;
  margin: auto;
  justify-content: center;
  border: 0px;
  border-radius: 8px;
  outline: none;
  width: 300px;
`;

const Stbut = styled.button`
  justify-content: center;
  align-items: center;
  border: 1px solid;
  border-radius: 8px;
  margin: auto;
  width: 100%;
  max-width: 50px;
  margin-left: 10px;
`;

const Stbox = styled.div`
  width: 100%;
  max-width: 700px;

  margin: 12px auto;
  margin-bottom: 30px;
  border: 0px;
  border-radius: 50px;
  padding: 10px;
`;

const Stcardoutline = styled.div`
  margin: auto;
  justify-content: center;
  align-items: center;
  display: flex;
  width: 100%;
  max-width: 150vh;
`;

const StCategory = styled.div`
  display: inline-block;
  border: 1px solid #e4dccf;
  color: #e4dccf;
  border-radius: 8px;
  padding: 5px;
  margin-right: 10px;
  cursor: pointer;
`;
