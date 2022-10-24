import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Header = ({ porpsChange }) => {
  const [ButChange, setButChange] = useState(true);
  const navigate = useNavigate();

  return (
    <Stoutline>
      <Sttitle
        onClick={() => {
          navigate('/');
        }}
      >
        회고투게더
      </Sttitle>
      <Stbutdiv>
        <Stwrite>
          {ButChange ? (
            <Stwritein
              onClick={() => {
                console.log(ButChange);
                navigate('/addpost', { state: { postChange: true } });
                setButChange(false);
              }}
            >
              작성하기
            </Stwritein>
          ) : (
            <Stwritein
              onClick={() => {
                setButChange(true);
                console.log(ButChange);
                navigate('/', { state: { postChange: false } });
              }}
            >
              이전으로
            </Stwritein>
          )}
        </Stwrite>
        <Stbut>로그인</Stbut>
        <Stbut>회원가입</Stbut>
      </Stbutdiv>
    </Stoutline>
  );
};

export default Header;

const Stoutline = styled.div`
  margin: 10px auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Sttitle = styled.div`
  width: 100%;
  cursor: pointer;
`;

const Stbutdiv = styled.div`
  width: 100%;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: right;
  flex-direction: row;
  margin: auto;
  gap: 5px;
`;

const Stbut = styled.button`
  border-radius: 8px;
  outline: none;
  border: 1px solid #e4dccf;
  background-color: #576f72;
  color: #e4dccf;
`;

const Stwrite = styled.div`
  border: 1px solid #e4dccf;
  background-color: #576f72;
  color: #e4dccf;
  border-radius: 8px;
  width: 100%;
  max-width: 100px;
  height: 30px;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const Stwritein = styled.div`
  text-align: center;
  width: 100%;
  align-items: center;
  padding: 5px;
`;
