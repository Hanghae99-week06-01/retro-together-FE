import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import logo from '../img/logo.png';

const Header = ({ porpsChange }) => {
  const navigate = useNavigate();
  const [ButChange, setButChange] = useState(true);

  const username = localStorage.getItem('name');

  useEffect(() => {
    setButChange(porpsChange);
  }, [setButChange]);

  return (
    <StHeader>
      <div
        style={{ cursor: 'pointer' }}
        onClick={() => {
          navigate('/');
        }}
      >
        <img src={logo} />
      </div>
      <div>
        <div>유저이름 님 당신의 하루를 기록해주세요.</div>
      </div>
      <StBtnContainer>
        <StBtn
          onClick={() => {
            navigate('/signin');
          }}
        >
          로그인
        </StBtn>
        <StBtn
          onClick={() => {
            navigate('/signup');
          }}
        >
          회원가입
        </StBtn>
      </StBtnContainer>
      <div>
        {ButChange ? (
          <div
            onClick={() => {
              setButChange(false);
              console.log(ButChange);
              //버튼을 누르면 false (이전으로) 바껴야됨 false을 넘겨줘야됌
              navigate('/addpost', { state: { postChange: false } });
            }}
          >
            작성하기
          </div>
        ) : (
          <div
            onClick={() => {
              setButChange(true);
              console.log(ButChange);
              //버튼을 누르면 true (작성하기) 바껴야됨 true을 넘겨줘야됌
              navigate('/', { state: { postChange: true } });
            }}
          >
            이전으로
          </div>
        )}
      </div>
    </StHeader>
  );
};

export default Header;

const StHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StBtnContainer = styled.div`
  display: flex;
  align-items: center;
  padding-right: 30px;
  gap: 15px;
`;

const StBtn = styled.button`
  width: 130px;
  height: 40px;
  border-radius: 20px;
  border: 0px solid;
  background-color: #f7931d;
  :hover {
    cursor: pointer;
    background-color: #576f72;
  }
`;
