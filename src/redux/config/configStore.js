import { configureStore } from '@reduxjs/toolkit';
import postCommentsSlice from '../modules/postCommentsSlice';

const store = configureStore({
  reducer: { postCommentsSlice },
});

export default store;
