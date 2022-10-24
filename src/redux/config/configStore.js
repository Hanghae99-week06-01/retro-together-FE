import { configureStore } from '@reduxjs/toolkit';
import posts from "../modules/postsSlice"

const store = configureStore({
  reducer: {
    posts,
    
  },
});

export default store;
