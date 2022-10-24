import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddPostComments from '../features/comments/AddPostComments';
import PostComments from '../pages/PostComments';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PostComments />} />
        <Route path="/:id" element={<AddPostComments />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
