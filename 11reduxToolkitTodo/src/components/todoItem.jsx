import React, { useState } from "react";
import { delTodo, checkTodo, editTodo } from "./features/todo/todoSlice";
import { useDispatch } from "react-redux";


function TodoItem({ todo }) {
  const [isTodoEditable, setIsTodoEditable] = useState(false);
  const [newMsg, setNewMsg] = useState(todo.msg);

  const dispatch = useDispatch();
  const deleteTodo = () => {
    dispatch(delTodo(todo.id));
    console.log("deleted");
  };


  const toggleCompleted = () => {
    dispatch(checkTodo(todo.id));
    console.log("check");
  };


  const thisTodoId = todo.id;
  const edit = () => {
    dispatch(editTodo({ thisTodoId, newMsg }));
  };



  
  return (
    <div
      className={`flex border border-gray/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-white   
        ${todo.check ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"}`}
    >
      <input
        type="checkbox"
        className="cursor-pointer"
        checked={todo.check}
        onChange={toggleCompleted}
      />
      <input
        type="text"
        className={`border outline-none w-full bg-transparent rounded-lg pl-3 ${
          todo.check ? "line-through" : ""
        }`}
        value={newMsg}
        onChange={(e) => setNewMsg(e.target.value)}
        readOnly={!isTodoEditable}
      />
      {/* Edit, Save Button */}
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
        onClick={() => {
          if (todo.check) return;
          edit();
          setIsTodoEditable((prev) => !prev);
        }}
        disabled={todo.check}
      >
        {isTodoEditable ? "📁" : "✏️"}
      </button>
      {/* Delete Todo Button */}
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
        onClick={() => deleteTodo()}
      >
        ❌
      </button>
    </div>
  );
}

export default TodoItem;
