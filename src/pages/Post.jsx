import React from 'react';
import Header from '../components/Header';
import Layout from '../components/Layout';
import Comment from './Comment';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

const Post = () => {
  const dispatch = useDispatch();

  return (
    <Layout>
      <Header />

      <Stoutline>
        <div className="btn btn-dark">TIL</div>

        <div>
          <div>제목</div>
          <Stinput>title</Stinput>
        </div>
        <div>
          <div>TIL/ WIL</div>
          <Sttextdiv>내용</Sttextdiv>
        </div>
        <div>
          <div>회고</div>
          <Sttextdiv>내용</Sttextdiv>
        </div>

        <hr />

        <StcastegoryBox>
          <Stcategory>#React</Stcategory>
          <Stcategory>#Test</Stcategory>
        </StcastegoryBox>

        <Stbutdiv>
          <button>수정 or 저장</button>
        </Stbutdiv>
        <hr />
        <Comment />
      </Stoutline>
    </Layout>
  );
};

export default Post;
const Stoutline = styled.div`
  margin: 0 auto;
  max-width: 1000px;
  min-width: 800px;
`;

const Stinput = styled.div`
  font-size: 15px;
  padding: 10px;
  width: 100%;
  height: 50px;
  border-radius: 12px;
  border: 0px;
  outline: none;
  margin: 10px auto;
  background-color: white;
`;

const Sttextdiv = styled.div`
  width: 100%;
  max-width: 1000px;
  height: 700px;
  margin-top: 10px;
  padding: 10px;
  background-color: white;
`;

const Stbutdiv = styled.div`
  display: flex;
  justify-content: right;
`;

const StcastegoryBox = styled.div`
  align-items: center;
  flex-direction: column;
  margin-top: 10px;
`;

const Stcategory = styled.div`
  color: #e4dccf;
  border: 1px solid #7d9d9c;
  border-radius: 8px;
  padding: 2px;
  margin-left: 7px;
  display: inline-block;
`;
