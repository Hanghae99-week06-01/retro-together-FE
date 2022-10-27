import axios from "axios";
import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

//GET thunk
export const __getPostThunk = createAsyncThunk(
  "GET_POST",
  async(payload, thunkAPI) => {
    try{
      const data = await axios.get(`http://localhost:3001/posts`)
      console.log(data.data);
      return thunkAPI.fulfillWithValue(data.data);
    }catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

//Add thunk
export const __addPostThunk = createAsyncThunk(
  "ADD_POST", 
  async (payload, thunkAPI) => { //콜백
      try{
          const postList = await axios.post("http://localhost:3001/posts", payload);
          return thunkAPI.fulfillWithValue(postList.data);
      }catch (error) {
          return thunkAPI.rejectWithValue(error);
      }}
  );




const initialState = {
  posts: [],
  isLoading: false,
  isSuccess: false,
  error: null,
};

export const postsSlice = createSlice({
  name:"posts",
  initialState,
  reducers:{},
  extraReducers:{
    //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    [__getPostThunk.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.post = action.payload;
      state.posts = [...action.payload]
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
  

  }
})

export const {} = postsSlice.actions;
export default postsSlice.reducer;