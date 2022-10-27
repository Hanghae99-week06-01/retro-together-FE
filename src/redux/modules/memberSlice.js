import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import instance from '../../lib/instance';
import { setCookie, removeCookie } from '../../lib/cookie';

export const addMemberThunk = createAsyncThunk(
  'ADD_MEMBER',
  async (payload, thunkAPI) => {
    try {
      const { data } = await instance.post('/api/member/signup', payload);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const checkInMemberThunk = createAsyncThunk(
  'CHECK_IN_MEMBER',
  async ({ emailId, password }, thunkAPI) => {
    try {
      const { data } = await instance
        .post('/api/member/login', {
          emailId,
          password,
        })
        .then((res) => {
          console.log(res);
          setCookie('auth', res.request.getResponseHeader('authorization'));
          setCookie('token', res.request.getResponseHeader('refresh-token'));
          sessionStorage.setItem('id', res.data.data.id);
          sessionStorage.setItem('emailId', res.data.data.emailId);
          sessionStorage.setItem('nickname', res.data.data.nickname);
        });
      console.log(data);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const checkOutMemberThunk = createAsyncThunk(
  'CHECK_OUT_MEMBER',
  async (payload, thunkAPI) => {
    try {
      await instance.post('/api/auth/member/logout');
      return removeCookie('authorization', 'refresh-token');
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = {
  member: [],
  isLoading: false,
  error: null,
};

const memberSlice = createSlice({
  name: 'member',
  initialState,
  reducers: {},
  extraReducers: {
    [addMemberThunk.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.member.push(action.payload);
    },
    [addMemberThunk.pending]: (state) => {
      state.isLoading = true;
    },
    [addMemberThunk.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [checkInMemberThunk.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.success = true;
    },
    [checkInMemberThunk.pending]: (state) => {
      state.isLoading = true;
    },
    [checkInMemberThunk.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [checkOutMemberThunk.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.success = true;
    },
    [checkOutMemberThunk.pending]: (state) => {
      state.isLoading = true;
    },
    [checkOutMemberThunk.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default memberSlice.reducer;
