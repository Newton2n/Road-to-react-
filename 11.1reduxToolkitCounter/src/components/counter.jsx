import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../features/counter/counterSlice";
function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  console.log(count);
  return (
    <div>
      <button onClick={() => dispatch(increment())}>increment</button>
      <h1> counter value{count} </h1>
      <button onClick={() => dispatch(decrement())}>decrement</button>
    </div>
  );
}

export default Counter;
