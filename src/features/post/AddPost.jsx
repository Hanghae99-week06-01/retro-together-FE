import { Button } from 'bootstrap';
import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../../components/Header';
import Layout from '../../components/Layout';

const AddPost = () => {
  const [Reque, Setreque] = useState(true);

  const [category, Setcategory] = useState();
  console.log(category);

  const [post, setPost] = useState();

  useEffect(() => {}, []);

  const location = useLocation();
  const change = location.state.postChange;
  console.log('>>>' + change);

  return (
    <Layout>
      <Header porpsChange={change} />
      <Stoutline>
        <form>
          <div
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
          </div>
          <div>
            <div>제목</div>
            <Stinput
              placeholder="title"
              type="text"
              onChange={(e) => {
                const { value } = e.target;
                setPost({
                  ...post,
                  title: value,
                });
              }}
            />
          </div>
          <div>
            <div>TIL/ WIL</div>
            <Sttextarea
              placeholder="today"
              type="text"
              onChange={(e) => {
                const { value } = e.target;
                setPost({
                  ...post,
                  TWIL: value,
                });
                console.log(value);
              }}
            ></Sttextarea>
          </div>
          <div>
            <div>회고</div>
            <Sttextarea
              placeholder="recall"
              type="text"
              onChange={(e) => {
                const { value } = e.target;
                setPost({
                  ...post,
                  reacll: value,
                });
                console.log(value);
              }}
            ></Sttextarea>
          </div>

          <hr />
          <input placeholder="#테그입력" />
          <button>추가</button>
          <StcastegoryBox>
            <Stcategory>#React</Stcategory>
            <Stcategory>#Test</Stcategory>
          </StcastegoryBox>

          <Stbutdiv>
            <button>취소</button>
            <button>저장</button>
          </Stbutdiv>
          <hr />
        </form>
      </Stoutline>
    </Layout>
  );
};

export default AddPost;

const Stoutline = styled.div`
  margin: 0 auto;
  max-width: 1000px;
  min-width: 800px;
`;

const Stinput = styled.input`
  font-size: 15px;
  padding: 10px;
  width: 100%;
  height: 50px;
  border-radius: 12px;
  border: 0px;
  outline: none;
  margin: 10px auto;
`;

const Sttextarea = styled.textarea`
  width: 100%;
  max-width: 1000px;
  height: 700px;
  margin-top: 10px;
  padding: 10px;
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
  padding: 5px;
  margin-left: 7px;
  display: inline-block;
`;
