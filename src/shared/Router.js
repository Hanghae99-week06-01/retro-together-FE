import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import AddPost from '../features/post/AddPost';
import Post from '../features/post/Post';
import My from '../pages/My';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import GlobalStyle from '../styles/GlobalStyle';

const Router = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="addpost" element={<AddPost />} />
        <Route path="post/:id" element={<Post />} />
        <Route path="my" element={<My />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
