import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Modal from '../components/Modal';
import { addMemberThunk } from '../redux/modules/memberSlice';

const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [member, setMember] = useState({
    email: '',
    nickname: '',
    password: '',
  });

  const onChangeSignUp = (e) => {
    const { name, value } = e.target;
    setMember({ ...member, [name]: value });
  };

  const onClickSignUp = () => {
    if (
      member.email.trim() === '' ||
      member.nickname.trim() === '' ||
      member.password.trim() === ''
    ) {
      return alert('모든 항목을 입력해주세요.');
    }
    dispatch(
      addMemberThunk({
        email: member.email,
        nickname: member.nickname,
        password: member.password,
      })
    );
    setMember({ email: '', nickname: '', password: '' });
  };

  const onKeyPress = (e) => {
    if (e.key === 'Enter') onClickSignUp();
  };

  return (
    <Modal>
      <label>이메일</label>
      <input
        type="text"
        name="email"
        value={member.email}
        onChange={onChangeSignUp}
        onKeyPress={onKeyPress}
      />
      <label>닉네임</label>
      <input
        type="text"
        name="nickname"
        value={member.nickname}
        maxLength={8}
        onChange={onChangeSignUp}
        onKeyPress={onKeyPress}
      />
      <label>비밀번호</label>
      <input
        type="text"
        name="password"
        value={member.password}
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
