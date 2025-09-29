import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 100,
};
export const counterSlice = createSlice({
  initialState,
  name: "counter",
  reducers: {
    increment: (state) => {
        state.value + 1;
        console.log(state.value)
    },
    decrement: (state) => {
        console.log("decrement")
      state.value -= 1;
    },
    multipleByOwn: (state,actions) => {
        console.log("decrement")
      state.value -= 1;
    },
  },
});
export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
