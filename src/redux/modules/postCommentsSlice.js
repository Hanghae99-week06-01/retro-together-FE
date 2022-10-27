import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import instance from '../../lib/instance';

export const getPostCommentsThunk = createAsyncThunk(
  'GET_POST_COMMENTS', // 댓글 조회
  async (payload, thunkAPI) => {
    try {
      const { data } = await instance.get(`/api/comment/${payload}`);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const addPostCommentsThunk = createAsyncThunk(
  'ADD_POST_COMMENTS', // 댓글 추가
  async (payload, thunkAPI) => {
    try {
      const { data } = await instance.post('/api/auth/comment', payload);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const deletePostCommentsThunk = createAsyncThunk(
  'DELETE_POST_COMMENTS', // 댓글 삭제
  async (payload, thunkAPI) => {
    console.log(payload);
    try {
      await instance.delete(`/api/auth/comment/${payload}`);
      return thunkAPI.fulfillWithValue(payload);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const editPostCommentsThunk = createAsyncThunk(
  'UPDATE_COMMENT', // 댓글 수정
  async (payload, thunkAPI) => {
    try {
      instance.put(`/api/auth/comment/${payload.id}`, payload);
      return thunkAPI.fulfillWithValue(payload);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// 초기 상태 값
const initialState = {
  comments: {
    data: [],
    isLoading: false,
    error: null,
  },
  commentsByTodoId: {
    data: [],
    isLoading: false,
    error: null,
  },
};

const postCommentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {},
  extraReducers: {
    // 댓글 조회
    [getPostCommentsThunk.fulfilled]: (state, action) => {
      state.commentsByTodoId.isLoading = false;
      state.commentsByTodoId.data = action.payload;
    },
    [getPostCommentsThunk.pending]: (state) => {
      state.commentsByTodoId.isLoading = true;
    },
    [getPostCommentsThunk.rejected]: (state, action) => {
      state.commentsByTodoId.isLoading = false;
      state.commentsByTodoId.error = action.payload;
    },
    // 댓글 추가
    [addPostCommentsThunk.fulfilled]: (state, action) => {
      state.commentsByTodoId.isLoading = false;
      state.commentsByTodoId.data.push(action.payload);
    },
    [addPostCommentsThunk.pending]: (state) => {
      state.commentsByTodoId.isLoading = true;
    },
    [addPostCommentsThunk.rejected]: (state, action) => {
      state.commentsByTodoId.isLoading = false;
      state.commentsByTodoId.error = action.payload;
    },
    // 댓글 삭제
    [deletePostCommentsThunk.fulfilled]: (state, action) => {
      state.commentsByTodoId.isLoading = false;
      const target = state.commentsByTodoId.data.findIndex(
        (comment) => comment.id === action.payload
      );
      state.commentsByTodoId.data.splice(target, 1);
    },
    [deletePostCommentsThunk.pending]: (state) => {
      state.commentsByTodoId.isLoading = true;
    },
    [deletePostCommentsThunk.rejected]: (state, action) => {
      state.commentsByTodoId.isLoading = false;
      state.commentsByTodoId.error = action.payload;
    },
    // 댓글 수정
    [editPostCommentsThunk.fulfilled]: (state, action) => {
      const target = state.commentsByTodoId.data.findIndex(
        (comment) => comment.id === action.payload.id
      );
      state.commentsByTodoId.data.splice(target, 1, action.payload);
    },
    [editPostCommentsThunk.pending]: (state) => {},
    [editPostCommentsThunk.rejected]: () => {},
  },
});

export default postCommentsSlice.reducer;
