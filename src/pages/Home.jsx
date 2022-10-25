import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate('/:id')}>상세보기</button>
    </div>
  );
};

export default Home;
