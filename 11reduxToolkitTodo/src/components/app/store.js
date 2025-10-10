import { configureStore } from "@reduxjs/toolkit";
import  TodoSlice  from "../features/todo/todoSlice";
export const store = configureStore({
reducer :{
    todoStore :TodoSlice,
}
})