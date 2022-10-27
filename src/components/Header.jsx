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
