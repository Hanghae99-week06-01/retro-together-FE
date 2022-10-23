import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Modal from '../components/Modal';
import { checkMemberThunk } from '../redux/modules/memberSlice';

// const [cookie, setCookie, removeCookie] = useCookies(['cook'])

// const join = () => {

//   const temp = {
//     "emailId": "test@gmail.com",
//     "password": "Qwer1234!"
//   }

//   const data = axios.post('https://spring.pyuri.dev/api/members/login', temp)
//     .then(res => {
//       console.log(res)
//       console.log(res.request.getAllResponseHeaders())
//       console.log(res.request.getResponseHeader('authorization'))
//       setCookie('token', res.request.getResponseHeader('authorization'))
//       setCookie('refreshToken', res.request.getResponseHeader('refresh_token'))
//     }
//   )

//   console.log(token.refreshToken)
//   axios.defaults.headers.post['refresh_token'] = token.refreshToken;
//   axios.defaults.headers.post['authorization'] = token.token;
//   const data = axios.post('https://spring.pyuri.dev/api/auth/members/logout')
//   .then(res => {
//     console.log(res);
//   })
// }

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
      checkMemberThunk({
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
