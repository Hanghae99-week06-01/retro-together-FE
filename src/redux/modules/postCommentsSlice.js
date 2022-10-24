import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getPostCommentsThunk = createAsyncThunk(
  'GET_POST_COMMENTS',
  async (payload, thunkAPI) => {
    console.log(payload);
    try {
      const { data } = await axios.get(
        `http://localhost:3001/comments?todoId=${payload}`
      );
      console.log(data);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const addPostCommentsThunk = createAsyncThunk(
  'ADD_POST_COMMENTS',
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.post(
        'http://localhost:3001/comments',
        payload
      );
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const deletePostCommentsThunk = createAsyncThunk(
  'DELETE_POST_COMMENTS',
  async (payload, thunkAPI) => {
    try {
      await axios.delete(`http://localhost:3001/comments/${payload}`);
      return thunkAPI.fulfillWithValue(payload);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = {
  comments: [],
  isLoading: false,
  error: null,
};

const postCommentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {},
  extraReducers: {
    [getPostCommentsThunk.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.comments = action.payload;
    },
    [getPostCommentsThunk.pending]: (state) => {
      state.isLoading = true;
    },
    [getPostCommentsThunk.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [addPostCommentsThunk.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.comments.push(action.payload);
    },
    [addPostCommentsThunk.pending]: (state) => {
      state.isLoading = true;
    },
    [addPostCommentsThunk.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [deletePostCommentsThunk.fulfilled]: (state, action) => {
      state.isLoading = false;
      const target = state.comments.findIndex(
        (item) => item.id === action.payload
      );
      state.comments.splice(target, 1);
    },
    [deletePostCommentsThunk.pending]: (state) => {
      state.isLoading = true;
    },
    [deletePostCommentsThunk.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default postCommentsSlice.reducer;
