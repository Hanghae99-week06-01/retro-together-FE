import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import member from '../modules/memberSlice';

const store = configureStore({
  reducer: { member },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export default store;
