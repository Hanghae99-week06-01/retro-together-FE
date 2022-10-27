import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import logo from '../img/logo.png';
import { useDispatch } from 'react-redux';
import { getCookie } from '../lib/cookie';
import { checkOutMemberThunk } from '../redux/modules/memberSlice';

const Header = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const auth = getCookie('auth');
  const token = getCookie('token');

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
        {(auth !== undefined && auth !== null) ||
        (token !== undefined && token !== null) ? (
          <StBtn
            onClick={() => {
              dispatch(checkOutMemberThunk());
              alert('로그아웃 되었습니다.');
              navigate('/');
              window.location.reload();
            }}
          >
            로그아웃
          </StBtn>
        ) : (
          <StBtn
            onClick={() => {
              navigate('/signin');
            }}
          >
            로그인
          </StBtn>
        )}
        {(auth !== undefined && auth !== null) ||
        (token !== undefined && token !== null) ? (
          <StBtn
            onClick={() => {
              navigate('/my');
              window.location.reload();
            }}
          >
            마이페이지
          </StBtn>
        ) : (
          <StBtn
            onClick={() => {
              navigate('/signup');
            }}
          >
            회원가입
          </StBtn>
        )}
      </StBtnContainer>
    </StHeader>
  );
};

export default Header;

const StHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 1440px;
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
