import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import instance from '../../lib/instance';

//GETthunk
export const __getPostThunk = createAsyncThunk(
  'GET_POST',
  async (payload, thunkAPI) => {
    try {
      const data = await instance.get('/api/post/');
      return thunkAPI.fulfillWithValue(data.data);
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

//Addthunk
export const __addPostThunk = createAsyncThunk(
  'ADD_POST',
  async (payload, thunkAPI) => {
    console.log(payload);
    //콜백
    try {
      const formData = new FormData();
      formData.append('title', payload.title);
      formData.append('content', payload.content);
      formData.append('data', payload.data[0], {
        'Content-type': 'Multipart/form-data',
      });
      formData.append('imageUrl', payload.imageUrl);
      formData.append('tag', '나는 태그');
      const postList = await instance.post('/api/auth/post/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return thunkAPI.fulfillWithValue(postList);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = {
  posts: [],
  isLoading: false,
  isSuccess: false,
  error: null,
};

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: {
    //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    [__getPostThunk.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.post = action.payload;
      state.posts = [...action.payload];
    },
    [__getPostThunk.rejected]: (state, action) => {
      state.isLoading = false;
    },
    [__getPostThunk.pending]: (state) => {
      state.isLoading = true;
    },
    //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    [__addPostThunk.pending]: (state) => {
      state.isLoading = true;
    },
    [__addPostThunk.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.posts = [...state.posts, action.payload];
    },
    [__addPostThunk.rejected]: (state, action) => {
      state.isLoading = false;
    },
  },
});

export const {} = postsSlice.actions;
export default postsSlice.reducer;
