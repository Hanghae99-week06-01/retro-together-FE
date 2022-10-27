import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Layout from '../components/Layout';
import PostComments from '../features/comments/PostComments';
import styled from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  __getpostThunk,
  __deletepostThunk,
  __updatePostThunk,
  __getOnepostThunk,
} from '../redux/modules/postSlice';

const Post = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const posts = useSelector((state) => state.posts.posts);
  const post = useSelector((state) => state.post.post);
  // const post = useSelector((state) => state.posts.post);
  const postid = posts.filter((post) => post.id === Number(id))[0];

  const [saveChange, setsaveChange] = useState(true);
  //false일때 수정
  const [adpcategory, Setcategory] = useState();
  const [Update, setUpdate] = useState({
    category: '',
    title: '',
    twil_body: '',
    recall_body: '',
    image: '',
    url: '',
    tag: '',
  });

  useEffect(() => {
    dispatch(__getpostThunk(id));
  }, [dispatch]);

  const onDeleteHandler = () => {
    dispatch(__deletepostThunk(id));
    navigate('/');
  };

  useEffect(() => {
    dispatch(__getOnepostThunk(id));
  }, [posts]);

  useEffect(() => {
    setUpdate(post);
  }, [post]);

  const onSaveButtonHandler = () => {
    dispatch(
      __updatePostThunk({
        ...post,
        category: Update,
        title: Update,
        twil_body: Update,
        recall_body: Update,
        image: Update,
        url: Update,
        tag: Update,
      })
    );
    setsaveChange(true);
  };

  return (
    <Layout>
      <Header />
      <Stoutline>
        {saveChange ? (
          <div>
            <div className="btn btn-dark">{postid.category}</div>

            <div>
              <div>제목</div>
              <Sttitlediv>{postid.title}</Sttitlediv>
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
          </div>
        ) : (
          //수정화면

          <div>
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
                defaultValue={adpcategory}
                onChange={(e) => {
                  setUpdate(e.target.value);
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
                defaultValue={adpcategory}
                onChange={(e) => {
                  setUpdate(e.target.value);
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
                defaultValue={Update.title || ''}
                onChange={(e) => {
                  setUpdate(e.target.value);
                }}
              ></Stinput>
            </div>
            <div>
              <div>TIL/ WIL</div>
              <Sttextarea
                placeholder="today"
                type="text"
                defaultValue={Update.twil_body}
                onChange={(e) => {
                  setUpdate(e.target.value);
                }}
              ></Sttextarea>
            </div>
            <div>
              <div>회고</div>
              <Sttextarea
                placeholder="recall"
                type="text"
                defaultValue={Update.recall_body}
                onChange={(e) => {
                  setUpdate(e.target.value);
                }}
              ></Sttextarea>
            </div>
            이미지 파일로
            <Stimagefile className="input-group mb-3">
              <input
                type="file"
                className="form-control"
                id="inputGroupFile02"
              />
            </Stimagefile>
            이미지 URL
            <div
              className="input-group mb-3"
              defaultValue={Update.url}
              onChange={(e) => {
                setUpdate(e.target.value);
              }}
            >
              <input
                type="text"
                className="form-control"
                id="inputGroupFile02"
              />
            </div>
            <hr />
            <input
              placeholder="#테그입력"
              defaultValue={Update.tag}
              onChange={(e) => {
                setUpdate(e.target.value);
              }}
            />
            <button>추가</button>
            <StcastegoryBox>
              <Stcategory>{postid.tag}</Stcategory>
              <Stcategory>#Test</Stcategory>
            </StcastegoryBox>
          </div>
        )}

        <Stbutdiv>
          <button
            onClick={() => {
              const result = window.confirm('삭제하시겠습니까?');

              if (result) {
                return onDeleteHandler();
              } else {
                return;
              }
            }}
          >
            삭제하기
          </button>
          {saveChange ? (
            <button
              onClick={() => {
                setsaveChange(false);
              }}
            >
              수정하기
            </button>
          ) : (
            <button onClick={onSaveButtonHandler}>저장하기</button>
          )}
        </Stbutdiv>
        <hr />
        <PostComments />
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

const Sttitlediv = styled.div`
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

const Sttextarea = styled.textarea`
  width: 100%;
  max-width: 1000px;
  height: 700px;
  margin-top: 10px;
  padding: 10px;
`;
const Stimagefile = styled.div`
  width: 100%;
  max-width: 300px;
`;
