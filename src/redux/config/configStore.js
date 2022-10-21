import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    post,
    comment,
  },
});

export default store;
