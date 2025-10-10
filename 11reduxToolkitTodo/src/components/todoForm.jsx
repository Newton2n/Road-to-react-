import { useState } from "react";
import {  useDispatch } from "react-redux";
import { addTodo } from "./features/todo/todoSlice";
function TodoForm() {

  const dispatch = useDispatch();
  const submit = (e) => {
    if (!value) return;
    e.preventDefault();
    dispatch(addTodo(value));
    setValue("");
  };

  const [value, setValue] = useState("");

  return (
    <form className="flex" onSubmit={submit}>
      <input
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        type="text"
        placeholder="Write Todo..."
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
      />
      <button
        type="submit"
        className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;
