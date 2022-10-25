import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"


//GET thunk 상세보기
export const __getpostThunk = createAsyncThunk(
  "GET_POST", //action value
  async (payload, thunkAPI) => { //콜백
    console.log(payload)
      try{
          const data = await axios.get(`http://localhost:3001/posts/${payload}`);
          console.log(data.data)
          return thunkAPI.fulfillWithValue(data.data);
          
      }catch (error) {
          return thunkAPI.rejectWithValue(error);
      }}
  );



//DELETE thunk
export const __deletepostThunk = createAsyncThunk(
  "DELETE_POST",
  async (payload, thunkAPI) => {
      try {
            await axios.delete(`http://localhost:3001/posts/${payload}`);
            return thunkAPI.fulfillWithValue(payload);

        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }}
    );

  
const initialState = {
  posts: [],
  isLoading: false, 
  isSuccess: false,
  error: null,
};

  export const postSlice = createSlice({
    name: "posts", //모듈
    initialState,
    reducers: {}, //action value + action creator
    extraReducers:{
        [__getpostThunk.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.post = action.payload;
            state.posts = [action.payload];
        },
        [__getpostThunk.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        [__getpostThunk.pending]: (state) => {
            state.isLoading = true;
        },
         //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
        [__deletepostThunk.pending]: (state) => {
          state.isLoading = true; 
        },
        [__deletepostThunk.fulfilled]: (state, action) => {
            state.isLoading = false; 
            state.posts = state.posts.filter((post) => post.id !== action.payload); 
            // Store에 있는 posts 서버에서 가져온 posts를 filter
        },
        [__deletepostThunk.rejected]: (state, action) => {
            state.isLoading = false; 
            state.error = action.payload; 
        },
        
    },
});









export const {} = postSlice.actions;
export default postSlice.reducer;