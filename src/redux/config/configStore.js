import { configureStore } from '@reduxjs/toolkit';
import member from '../modules/memberSlice';

const store = configureStore({
  reducer: { member },
});

export default store;
