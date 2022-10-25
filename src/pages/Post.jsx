import React, { useEffect } from 'react';
import Header from '../components/Header';
import Layout from '../components/Layout';
import Comment from './Comment';
import styled from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { __getpostThunk } from '../redux/modules/postSlice';

const Post = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const posts = useSelector((state) => state.posts.posts);
  console.log(posts);
  // const post = useSelector((state) => state.posts.post);

  const postid = posts.filter((post) => post.id === Number(id))[0];

  useEffect(() => {
    dispatch(__getpostThunk(id));
  }, [dispatch]);

  return (
    <Layout>
      <Header />

      <Stoutline>
        <div className="btn btn-dark">{postid.category}</div>

        <div>
          <div>제목</div>
          <Stinput>{postid.title}</Stinput>
        </div>
        <div>
          <div>TIL/ WIL</div>
          <Sttextdiv>{postid.twil_body}</Sttextdiv>
        </div>
        <div>
          <div>회고</div>
          <Sttextdiv>{postid.recall_body}</Sttextdiv>
        </div>

        <hr />

        <StcastegoryBox>
          <Stcategory>{postid.tag}</Stcategory>
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
