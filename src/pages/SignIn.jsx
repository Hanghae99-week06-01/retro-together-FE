import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Modal from '../components/Modal';
import { checkInMemberThunk } from '../redux/modules/memberSlice';

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

  const onKeyPress = (e) => {
    if (e.key === 'Enter') onClickSignIn();
  };

  return (
    <Modal>
      <label>이메일</label>
      <input
        type="email"
        name="email"
        value={signIn.email}
        onChange={onChangeSignIn}
        onKeyPress={onKeyPress}
      />
      <label>비밀번호</label>
      <input
        type="password"
        name="password"
        value={signIn.password}
        onChange={onChangeSignIn}
        onKeyPress={onKeyPress}
      />
      <button onClick={onClickSignIn}>로그인</button>
      <label>아직도 회원이 아니신가요?</label>
      <label
        onClick={() => {
          navigate('/signup');
        }}
      >
        회원가입
      </label>
    </Modal>
  );
};

export default SignIn;
