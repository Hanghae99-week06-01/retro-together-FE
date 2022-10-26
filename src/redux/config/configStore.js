import { configureStore } from '@reduxjs/toolkit';
import posts from "../modules/postsSlice"
import post from "../modules/postSlice"
import mypage from "../modules/mypageSlice"

const store = configureStore({
  reducer: {
    posts,
    post,
    mypage,
    
  },
});

export default store;
