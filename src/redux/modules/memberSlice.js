import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const MEMBER = process.env.REACT_APP_MEMBER;
const SIGNIN = process.env.REACT_APP_SIGNIN;

export const addMemberThunk = createAsyncThunk(
  'ADD_MEMBER',
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.post(MEMBER, payload);
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
      const config = {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      };
      const { data } = await axios
        .post(
          'http://15.164.230.31:8080/api/member/login',
          { emailId, password },
          config
        )
        .then((res) => {
          localStorage.setItem(
            'authorization',
            res.request.getResponseHeader('authorization')
          );
          localStorage.setItem(
            'refresh_token',
            res.request.getResponseHeader('refresh_token')
          );
        });
      return thunkAPI.fulfillWithValue(data);
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
  },
});

export default memberSlice.reducer;

//
