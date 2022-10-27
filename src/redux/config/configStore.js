import { configureStore } from '@reduxjs/toolkit';
import posts from "../modules/postsSlice"
import post from "../modules/postSlice"


const store = configureStore({
  reducer: {
    posts,
    post,
    
    
  },
});

export default store;
