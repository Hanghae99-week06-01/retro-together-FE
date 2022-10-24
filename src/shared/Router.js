import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PostComments from '../pages/PostComments';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PostComments />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
