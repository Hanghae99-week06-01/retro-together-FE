import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Modal from '../components/Modal';
import { addMemberThunk } from '../redux/modules/memberSlice';

const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [signUp, setSignUp] = useState({
    email: '',
    nickname: '',
    password: '',
    checkpassword: '',
  });

  const onChangeSignUp = (e) => {
    const { name, value } = e.target;
    setSignUp({ ...signUp, [name]: value });
  };

  const onClickSignUp = () => {
    if (
      signUp.email.trim() === '' ||
      signUp.nickname.trim() === '' ||
      signUp.password.trim() === ''
    ) {
      alert('모든 항목을 입력해주세요.');
    } else if (signUp.password !== signUp.checkpassword) {
      alert('비밀번호를 확인해주세요.');
      return;
    }
    signUp.email = signUp.email.toLowerCase();
    dispatch(
      addMemberThunk({
        email: signUp.email,
        nickname: signUp.nickname,
        password: signUp.password,
      })
    );
    setSignUp({ email: '', nickname: '', password: '', checkpassword: '' });
  };

  const onKeyPress = (e) => {
    if (e.key === 'Enter') onClickSignUp();
  };

  return (
    <Modal>
      <label>이메일</label>
      <input
        type="email"
        name="email"
        value={signUp.email}
        onChange={onChangeSignUp}
        onKeyPress={onKeyPress}
      />
      <label>닉네임</label>
      <input
        type="text"
        name="nickname"
        value={signUp.nickname}
        maxLength={8}
        onChange={onChangeSignUp}
        onKeyPress={onKeyPress}
      />
      <label>비밀번호</label>
      <input
        type="password"
        name="password"
        value={signUp.password}
        minLength={6}
        onChange={onChangeSignUp}
        onKeyPress={onKeyPress}
      />
      <label>비밀번호 확인</label>
      <input
        type="password"
        name="checkpassword"
        value={signUp.checkpassword}
        minLength={6}
        onChange={onChangeSignUp}
        onKeyPress={onKeyPress}
      />
      <button onClick={onClickSignUp}>회원가입</button>
      <label>계정이 이미 있으신가요?</label>
      <label
        onClick={() => {
          navigate('/signin');
        }}
      >
        로그인
      </label>
    </Modal>
  );
};

export default SignUp;
