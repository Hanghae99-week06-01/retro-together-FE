import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate('/posts/1')}>상세보기</button>
      <button onClick={() => navigate('/posts/2')}>상세보기</button>
      <button onClick={() => navigate('/posts/3')}>상세보기</button>
      <button onClick={() => navigate('/posts/4')}>상세보기</button>
      <button onClick={() => navigate('/posts/5')}>상세보기</button>
    </div>
  );
};

export default Home;
