import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getPostCommentThunk = createAsyncThunk(
  'GET_COMMENT',
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.get(
        `http://localhost:3001/comments/${payload}`
      );
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = {
  data: {
    todoId: 0,
    content: '',
    id: 0,
  },
  isLoading: false,
  error: null,
  isGlobalEditmode: false,
};

export const postCommentSlice = createSlice({
  name: 'comment',
  initialState,
  reducers: {
    clearComment: (state) => {
      state.data.content = '';
    },
    globalEditModeToggle: (state, action) => {
      state.isGlobalEditmode = action.payload;
    },
  },
  extraReducers: {
    [getPostCommentThunk.fulfilled]: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { clearComment, globalEditModeToggle } = postCommentSlice.actions;
export default postCommentSlice.reducer;
