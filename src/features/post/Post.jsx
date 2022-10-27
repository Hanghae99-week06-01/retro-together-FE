import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';
import Layout from '../../components/Layout';
import PostComments from '../comments/PostComments';
import styled from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  __getpostThunk,
  __deletepostThunk,
  __updatePostThunk,
  __getOnepostThunk,
} from '../../redux/modules/postSlice';

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
      <StPost>
        {saveChange ? (
          <>
            <StCategory>{postid.category}</StCategory>
            <StCategoryBox>
              <StCategory>{postid.tag}</StCategory>
            </StCategoryBox>
            <StText>제목</StText>
            <StTitle>{postid.title}</StTitle>
            <StText>TIL/ WIL</StText>
            <StContents>{postid.twil_body}</StContents>
            <StText>회고</StText>
            <StContents>{postid.recall_body}</StContents>
          </>
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
              <StTitleInput
                placeholder="title"
                type="text"
                defaultValue={Update.title || ''}
                onChange={(e) => {
                  setUpdate(e.target.value);
                }}
              ></StTitleInput>
            </div>
            <div>
              <div>TIL/ WIL</div>
              <StContentTextarea
                placeholder="today"
                type="text"
                defaultValue={Update.twil_body}
                onChange={(e) => {
                  setUpdate(e.target.value);
                }}
              ></StContentTextarea>
            </div>
            <div>
              <div>회고</div>
              <StContentTextarea
                placeholder="recall"
                type="text"
                defaultValue={Update.recall_body}
                onChange={(e) => {
                  setUpdate(e.target.value);
                }}
              ></StContentTextarea>
            </div>
            이미지 파일로
            <StImageFile className="input-group mb-3">
              <input
                type="file"
                className="form-control"
                id="inputGroupFile02"
              />
            </StImageFile>
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
            <StCategoryBox>
              <StCategory>{postid.tag}</StCategory>
              <StCategory>#Test</StCategory>
            </StCategoryBox>
          </div>
        )}
        <StBtnBox>
          {saveChange ? (
            <StBtn
              onClick={() => {
                setsaveChange(false);
              }}
            >
              수정하기
            </StBtn>
          ) : (
            <StBtn onClick={onSaveButtonHandler}>취소하기</StBtn>
          )}
          {saveChange ? (
            <StBtn
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
            </StBtn>
          ) : (
            <StBtn onClick={onSaveButtonHandler}>저장하기</StBtn>
          )}
        </StBtnBox>
        <PostComments />
      </StPost>
    </Layout>
  );
};

export default Post;

const StCategory = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 26px;
  font-weight: 500;

  width: 100px;
  height: 40px;

  border-radius: 5px;
  background-color: #576f72;

  :hover {
    background-color: #f7931d;
  }
`;

const StPost = styled.div`
  display: block;

  width: 1000px;
  max-width: 1440px;

  margin: 50px 0;
`;

const StText = styled.div`
  font-size: 32px;
  font-weight: 600;

  padding-left: 10px;
  margin-top: 20px;
`;

const StTitle = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  height: 60px;

  padding-left: 20px;
  margin: 20px auto;

  font-size: 24px;
  font-weight: 500;

  border-radius: 5px;
  background-color: #424242;
`;

const StContents = styled.div`
  display: flex;

  width: 100%;
  height: 350px;

  padding: 20px 0 0 20px;
  margin: 20px auto;

  font-size: 24px;
  font-weight: 500;

  border-radius: 5px;
  background-color: #424242;
`;

const StTitleInput = styled.input`
  display: flex;
  align-items: center;

  width: 100%;
  height: 60px;

  padding-left: 20px;
  margin: 20px auto;

  font-size: 24px;
  font-weight: 500;

  border-radius: 5px;
  background-color: #424242;
`;

const StContentTextarea = styled.textarea`
  display: flex;

  width: 100%;
  height: 350px;

  padding: 20px 0 0 20px;
  margin: 20px auto;

  font-size: 24px;
  font-weight: 500;

  border-radius: 5px;
  background-color: #424242;
`;

const StBtnBox = styled.div`
  display: flex;
  justify-content: right;
  margin: 30px auto;
  gap: 20px;
`;

const StCategoryBox = styled.div`
  align-items: center;
  flex-direction: column;
  margin-top: 10px;
`;

const StImageFile = styled.div`
  width: 100%;
  max-width: 300px;
`;

const StBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 18px;
  font-weight: 500;

  width: 150px;
  height: 40px;

  border: 0px;
  border-radius: 5px;
  background-color: #f7931d;

  :hover {
    background-color: #576f72;
  }
`;
