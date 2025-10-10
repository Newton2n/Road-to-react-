import { createSlice, nanoid } from "@reduxjs/toolkit";
const initialState = {
  todos: [
   
  ],
};

export const TodoSlice = createSlice({
  name: "todoSlice",
  initialState,
  reducers: {
    addTodo: (state, actions) => {
      const todo = {
        id: nanoid(),
        msg: actions.payload,
        check: false,
      };

      state.todos.push(todo);
    },
    delTodo: (state, actions) => {
      state.todos = state.todos.filter((item) => item.id !== actions.payload);
    },

    editTodo: (state, actions) => {
      const { thisTodoId, newMsg } = actions.payload;
      console.log(thisTodoId, newMsg, "new");
      state.todos.map((todo) =>
        todo.id === thisTodoId ? (todo.msg = newMsg) : todo
      );
    },
    checkTodo: (state, actions) => {
      // console.log(state)
      const todo = state.todos.find((todo) => todo.id === actions.payload);
      console.log(todo, "i am find todo");
      if (todo) {
        todo.check = !todo.check;
      }
    },
  },
});
export const { addTodo, delTodo, editTodo, checkTodo, getItemLocal } =
  TodoSlice.actions;
export default TodoSlice.reducer;
