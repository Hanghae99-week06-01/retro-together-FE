import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Modal from '../components/Modal';
import {
  checkInMemberThunk,
  checkOutMemberThunk,
  setCookie,
} from '../redux/modules/memberSlice';

const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [signIn, setSignIn] = useState({
    email: '',
    password: '',
  });

  const onChangeSignIn = (e) => {
    const { name, value } = e.target;
    setSignIn({ ...signIn, [name]: value });
  };

  const onClickSignIn = () => {
    if (signIn.email.trim() === '' || signIn.password.trim() === '') {
      alert('모든 항목을 입력해주세요.');
    }
    dispatch(
      checkInMemberThunk({
        emailId: signIn.email,
        password: signIn.password,
      })
    );
    setSignIn({ email: '', password: '' });
  };

  const onClickSignOut = () => {
    dispatch(checkOutMemberThunk());
    alert('로그아웃 되었습니다.');
    navigate('/');
  };

  const onKeyPress = (e) => {
    if (e.key === 'Enter') onClickSignIn();
  };

  return (
    <Modal>
      <SignWrap>
        <SignContianer>
          <h1>로그인</h1>
          <div>
            <label>이메일</label>
          </div>
          <input
            type="email"
            name="email"
            value={signIn.email}
            onChange={onChangeSignIn}
            onKeyPress={onKeyPress}
          />
          <div>
            <label>비밀번호</label>
          </div>
          <input
            type="password"
            name="password"
            value={signIn.password}
            onChange={onChangeSignIn}
            onKeyPress={onKeyPress}
          />
          <div>
            <button onClick={onClickSignIn}>로그인</button>
          </div>
          <div>
            <label>아직도 회원이 아니신가요?</label>
            <label
              onClick={() => {
                navigate('/signup');
              }}
            >
              회원가입
            </label>
          </div>
          <div>
            <button onClick={onClickSignOut}>로그아웃</button>
          </div>
        </SignContianer>
      </SignWrap>
    </Modal>
  );
};

export default SignIn;

const SignWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SignContianer = styled.div`
  text-align: center;
`;
