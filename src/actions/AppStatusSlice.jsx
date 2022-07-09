import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';


const initialState = {
  value: 0,
  loading: false,
  items:[]
};
const url ='';
export const getAppStatus = createAsyncThunk('home/getAppStatus', async (env,thunkApi) =>{
    try{
       // const state = thunkApi.getState();
       // thunkApi.dispatch();
        const resp = await axios.get(url + env);
        return resp.data;
    } catch(error) {
            thunkApi.rejectWithValue("");
    }
   
});
 const appStatusSlice = createSlice({
    name:'appStatus',
    initialState,
    extraReducers:{
        [getAppStatus.pending]:(state) => {
            state.loading=true;
        },
        [getAppStatus.fulfilled]: (state, action) => {
         state.loading = false;
         state.items = action;
        },
        [getAppStatus.rejected]:(state) => {
            state.loading = false;
        }
    }
})

export default appStatusSlice.reducer;