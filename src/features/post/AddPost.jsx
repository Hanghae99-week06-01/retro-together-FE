import { Button } from 'bootstrap';
import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import Layout from '../../components/Layout';
import { __addPostThunk } from '../../redux/modules/postsSlice';
import Header from '../../components/Header';

const AddPost = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [category, Setcategory] = useState();

  const [post, setPost] = useState({
    title: '',
    content: '',
    imageUrl: '',
    data: '',
  });

  const onSubmitHandler = (post) => {
    dispatch(__addPostThunk(post));
    navigate('/');
  };

  return (
    <Layout>
      <StAddForm
        onSubmit={() => {
          onSubmitHandler(post);
        }}
      >
        <Header />
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
        </div>
        <div>
          <div>제목</div>
          <Stinput
            placeholder="title"
            type="text"
            value={post.title}
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
            value={post.twil_body}
            onChange={(e) => {
              const { value } = e.target;
              setPost({
                ...post,
                content: value,
              });
            }}
          ></Sttextarea>
        </div>
        <div>
          <div>회고</div>
          <Sttextarea
            placeholder="recall"
            type="text"
            value={post.recall_body}
            onChange={(e) => {
              const { value } = e.target;
              setPost({
                ...post,
                recall_body: value,
              });
            }}
          ></Sttextarea>
        </div>
        이미지 파일로
        <Stimagefile className="input-group mb-3">
          <input
            type="file"
            className="form-control"
            id="inputGroupFile02"
            value={post.data}
            onChange={(e) => {
              const { value } = e.target;
              setPost({
                ...post,
                data: value,
              });
            }}
          />
        </Stimagefile>
        이미지 URL
        <div
          className="input-group mb-3"
          value={post.imageUrl}
          onChange={(e) => {
            const { value } = e.target;
            setPost({
              ...post,
              imageUrl: value,
            });
          }}
        >
          <input type="text" className="form-control" id="inputGroupFile02" />
        </div>
        <hr />
        <input
          placeholder="#테그입력"
          value={post.tag}
          onChange={(e) => {
            const { value } = e.target;
            setPost({
              ...post,
              tag: value,
            });
          }}
        />
        <button>추가</button>
        <StcastegoryBox>
          <Stcategory>#React</Stcategory>
          <Stcategory>#Test</Stcategory>
        </StcastegoryBox>
        <Stbutdiv>
          <button
            type="button"
            onClick={() => {
              navigate('/');
            }}
          >
            취소
          </button>
          <button type="submit">저장</button>
        </Stbutdiv>
        <hr />
      </StAddForm>
    </Layout>
  );
};

export default AddPost;

const StAddForm = styled.form`
  display: block;
  max-width: 1440px;
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

const Stimagefile = styled.div`
  width: 100%;
  max-width: 300px;
`;
