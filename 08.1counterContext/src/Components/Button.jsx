import { React, useContext } from "react";
import { CounterContext } from "../Context/CountContext";
function Button() {
  const value = useContext(CounterContext);

  return (
    <div>
      <button
        onClick={() => {
          value.setCount(value.count + 1);
        }}
      >
        i am second Button {value.count}
      </button>
      <p>{value.count}</p>
    </div>
  );
}

export default Button;
