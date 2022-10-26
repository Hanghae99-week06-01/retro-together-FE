import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Layout from '../components/Layout';
import Card from '../components/Card';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { __getpostThunk } from '../redux/modules/mypageSlice';

const Mypage = () => {
  const posts = useSelector((state) => state.posts.posts);
  const test = useSelector((state) => state.mypage.posts);
  console.log(test);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [category, Setcategory] = useState('');
  const [save, setSave] = useState({
    category: '',
  });
  console.log(category);

  useEffect(() => {
    dispatch(__getpostThunk(save.category));
  }, [dispatch]);
  console.log(save.category);

  return (
    <Layout>
      <Header />
      <Stoutline>
        <Sth2>나의 게시물 </Sth2>
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
            autoComplete="off"
            value={category}
            onChange={(e) => {
              const { value } = e.target;
              setSave({
                ...save,
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
              setSave({
                ...save,
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
        </Stbutdiv>
      </Stoutline>
      <hr />
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
export default Mypage;

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
  border: 1px solid #e4dccf;
  border-radius: 12px;
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
