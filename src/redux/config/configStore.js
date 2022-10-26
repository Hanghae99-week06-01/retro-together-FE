import { configureStore } from '@reduxjs/toolkit';

import comment from '../modules/postCommentSlice';
import comments from '../modules/postCommentsSlice';
import post from "../modules/postSlice"
import posts from "../modules/postsSlice"

const store = configureStore({
  reducer: { comment, comments, post, posts },
});

export default store;
