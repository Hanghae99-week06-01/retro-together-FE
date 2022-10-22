import React from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from '../components/Modal';

const SignIn = () => {
  const navigate = useNavigate();

  return (
    <Modal>
      <label>이메일</label>
      <input />
      <label>비밀번호</label>
      <input />
      <button>로그인</button>
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
