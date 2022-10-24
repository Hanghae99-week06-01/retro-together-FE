import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Modal from '../components/Modal';
import { checkInMemberThunk } from '../redux/modules/memberSlice';

//   axios.defaults.headers.post['refresh_token'] = token.refreshToken;
//   axios.defaults.headers.post['authorization'] = token.token;
//   const data = axios.post('https://spring.pyuri.dev/api/auth/members/logout')

const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [key, setKey] = useState({
    email: '',
    password: '',
  });

  const onChangeSignIn = (e) => {
    const { name, value } = e.target;
    setKey({ ...key, [name]: value });
  };

  const onClickSignIn = () => {
    if (key.email.trim() === '' || key.password.trim() === '') {
      alert('모든 항목을 입력해주세요.');
    }
    dispatch(
      checkInMemberThunk({
        emailId: key.email,
        password: key.password,
      })
    );
    setKey({ email: '', password: '' });
  };

  const onKeyPress = (e) => {
    if (e.key === 'Enter') onClickSignIn();
  };

  return (
    <Modal>
      <label>이메일</label>
      <input
        type="text"
        name="email"
        value={key.email}
        onChange={onChangeSignIn}
        onKeyPress={onKeyPress}
      />
      <label>비밀번호</label>
      <input
        type="text"
        name="password"
        value={key.password}
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
