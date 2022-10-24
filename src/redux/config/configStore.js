import { configureStore } from '@reduxjs/toolkit';
import replySlice from '../modules/replySlice';

const store = configureStore({
  reducer: { replySlice },
});

export default store;
