import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"


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

  const initialState = {
    posts: [],
    isLoading: false,
    isSuccess: false,
    error: null,
  };

  export const mypageSlice = createSlice({
    name:"posts",
    initialState,
    reducers:{},
    extraReducers:{
      [__getpostThunk.fulfilled]: (state, action) => {
        state.isLoading = false;
        // state.post = action.payload;
        if(action.payload = "TIL"){
          state.posts = [action.payload]
        }
        
    },
    [__getpostThunk.rejected]: (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
    },
    [__getpostThunk.pending]: (state) => {
        state.isLoading = true;
    },
  
    }
  })




  export const {} = mypageSlice.actions;
export default mypageSlice.reducer;