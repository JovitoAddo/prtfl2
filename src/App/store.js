import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../Components/Counter/counterSlice'


export const store = configureStore({
    reducer:{
            counter: counterReducer,
    }
})