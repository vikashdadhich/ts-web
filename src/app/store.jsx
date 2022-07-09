import { configureStore } from '@reduxjs/toolkit';
import AppStatusSlice from '../actions/AppStatusSlice';
// import counterReducer from './counterSlice'


export const store = configureStore({
    reducer:{
        appStatus: AppStatusSlice,
    },
});

