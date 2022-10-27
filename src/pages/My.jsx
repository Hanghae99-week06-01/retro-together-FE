import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Layout from '../components/Layout';
import Card from '../components/Card';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

const Mypage = () => {
  const posts = useSelector((state) => state.posts.posts);
  const navigate = useNavigate();
  const [category, Setcategory] = useState();
  const [post, setPost] = useState({
    category: '',
    title: '',
    twil_body: '',
    recall_body: '',
    image: '',
    url: '',
    tag: '',
  });

  return (
    <Layout>
      <Header />
      <My>
        <Sth2>나의 게시물 </Sth2>
        <Stbutduv
          className="btn-group"
          role="group"
          aria-label="Basic radio toggle button group"
        >
          <input
            type="radio"
            className="btn-check"
            name="btnradio"
            id="btnradio1"
            autoComplete="off"
            value={category}
            onChange={(e) => {
              const { value } = e.target;
              setPost({
                ...post,
                category: value,
              });
            }}
          />
          <label
            className="btn btn-outline-dark"
            htmlFor="btnradio1"
            onClick={() => {
              Setcategory('TIL');
            }}
          >
            TIL
          </label>

          <input
            type="radio"
            className="btn-check"
            name="btnradio"
            id="btnradio2"
            autoComplete="off"
            value={category}
            onChange={(e) => {
              const { value } = e.target;
              setPost({
                ...post,
                category: value,
              });
            }}
          />
          <label
            className="btn btn-outline-dark"
            htmlFor="btnradio2"
            onClick={() => {
              Setcategory('WIL');
            }}
          >
            WIL
          </label>
        </Stbutduv>
        <Stcardoutline>
          <div className="row row-cols-1 row-cols-md-5 g-4">
            {posts.map((post) => (
              <Card key={post.id} post={post} />
            ))}
          </div>
        </Stcardoutline>
      </My>
    </Layout>
  );
};
export default Mypage;

const My = styled.div`
  display: block;
`;

const Stcardoutline = styled.div`
  margin: auto;
  justify-content: center;
  align-items: center;
  display: flex;
  width: 100%;
  max-width: 150vh;
`;

const Sth2 = styled.h2`
  border: 1px solid #e4dccf;
  border-radius: 12px;
  color: #e4dccf;
`;

const Stbutduv = styled.div`
  justify-content: right;
`;
