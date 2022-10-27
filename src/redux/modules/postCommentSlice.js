import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import instance from '../../lib/instance';

export const getPostCommentThunk = createAsyncThunk(
  'GET_COMMENT', // 댓글 수정 버튼을 누를 때
  async (payload, thunkAPI) => {
    console.log(payload);
    try {
      const { data } = await instance.get(`/api/auth/comment/${payload}`);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = {
  data: {
    postId: 0,
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
