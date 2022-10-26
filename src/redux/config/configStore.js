import { configureStore } from '@reduxjs/toolkit';
import comment from '../modules/postCommentSlice';
import comments from '../modules/postCommentsSlice';

const store = configureStore({
  reducer: { comment, comments },
});

export default store;
