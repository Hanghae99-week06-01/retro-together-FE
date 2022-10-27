import React from 'react';
import { useNavigate } from 'react-router-dom';
import { getCookie } from '../../lib/cookie';
import styled from 'styled-components';

const PostBtn = () => {
  const navigate = useNavigate();

  const auth = getCookie('auth');
  const token = getCookie('token');

  const name = sessionStorage.getItem('nickname');

  return (
    <div>
      {(auth !== undefined && auth !== null) ||
      (token !== undefined && token !== null) ? (
        <StBtn
          onClick={() => {
            navigate('/addpost');
          }}
        >
          {name} 당신의 하루를 기록해주세요
        </StBtn>
      ) : (
        <StBtn
          onClick={() => {
            alert('회원이 아닙니다..!');
            navigate('/signup');
          }}
        >
          당신의 하루를 기록해주세요
        </StBtn>
      )}
    </div>
  );
};

export default PostBtn;

const StBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  margin: 100px auto 160px auto;

  width: 600px;
  height: 90px;

  font-size: 26px;
  font-weight: 400;

  border: 0px;
  border-radius: 45px;

  background: linear-gradient(220deg, #f7931d, #576f72);

  :hover {
    background: linear-gradient(220deg, #479ca7, #cb1df7);
  }
`;
