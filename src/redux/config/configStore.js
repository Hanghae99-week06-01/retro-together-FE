import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import member from '../modules/memberSlice';

import comment from '../modules/postCommentSlice';
import comments from '../modules/postCommentsSlice';
import post from '../modules/postSlice';
import posts from '../modules/postsSlice';

const store = configureStore({
  reducer: { comment, comments, post, posts, member },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export default store;
