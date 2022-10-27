import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Layout from '../components/Layout';
import Card from '../components/Card';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { __getPostThunk } from '../redux/modules/postsSlice';

const TILpage = () => {
  const posts = useSelector((state) => state.posts.posts);
  const tests = useSelector((state) => state);
  console.log(posts);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [save, setSave] = useState({
    category: '',
  });
  console.log(save.category);

  const TILfilter = posts.filter((x) => x.category == 'TIL');
  console.log(TILfilter);

  return (
    <Layout>
      <Header />
      <Stoutline>
        <Sth2>TIL</Sth2>

        <Stbutdiv
          className="btn-group"
          role="group"
          aria-label="Basic radio toggle button group"
        >
          <input
            type="radio"
            className="btn-check"
            name="btnradio"
            id="btnradio1"
            autocomplete="off"
            onChange={navigate('/mypage')}
          />
          <label className="btn btn-outline-dark" for="btnradio1">
            ALL
          </label>

          <input
            type="radio"
            className="btn-check"
            name="btnradio"
            id="btnradio2"
            autoComplete="off"
            checked
            value={'TIL'}
            onChange={(e) => {
              const { value } = e.target;
              setSave({
                ...save,
                category: value,
              });
            }}
          />
          <label className="btn btn-outline-dark" for="btnradio2">
            TIL
          </label>

          <input
            type="radio"
            className="btn-check"
            name="btnradio"
            id="btnradio3"
            autocomplete="off"
            value={'WIL'}
            onChange={(e) => {
              navigate('/mypage/WIL');
              const { value } = e.target;
              setSave({
                ...save,
                category: value,
              });
            }}
          />
          <label className="btn btn-outline-dark" for="btnradio3">
            WIL
          </label>
        </Stbutdiv>
      </Stoutline>
      <hr />
      <Stcardoutline>
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {TILfilter.map((post) => (
            <Card key={post.id} post={post} />
          ))}

          {/* {posts.map((post) => {
            if (TILfilter) {
              console.log(TILfilter);
              // console.log(post.category + '<<');
              // console.log(post.category && save.category + '<<<');
              <Card key={post.id} post={post} />;
            } else if (WILfilter) {
              <Card key={post.id} post={post} />;
            }
            return null;
          })} */}

          {/* {posts.map((post) => {
            <Card key={post.id} post={post} />;
           )
            
            })} */}

          {/* {posts.map((post) => {
            if (post.category == 'WIL') {
              console.log(post.category + '<<');
              console.log(save.category + '<<');
              // console.log(post.category && save.category + '<<<');
              return <Card key={post.id} post={post} />;
            }  else {
              return null;
            }
          })} */}
        </div>
      </Stcardoutline>
    </Layout>
  );
};
export default TILpage;

const Stcardoutline = styled.div`
  margin: 20px auto;
  justify-content: center;
  align-items: center;
  display: flex;
  width: 100%;
  max-width: 150vh;
`;
// 40px 0px 40px 110px;
const Sth2 = styled.h2`
  align-items: center;
  padding: 12px;
  margin: auto;
  margin-left: 0px;
  color: #e4dccf;
`;

const Stbutdiv = styled.div`
  margin-top: 50px;
  margin-right: 20px;
`;

const Stoutline = styled.div`
  display: flex;
  margin: auto;
  width: 100%;
  max-width: 1450px;
`;
