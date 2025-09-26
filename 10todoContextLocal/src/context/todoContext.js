import { createContext, useContext } from "react";

 export const TodoContext = createContext({
  todos: [
    {
      id: 1,
      todo: "i am the text under the todoCreateContext",
      completed: false,
    },
  ],
  addTodo: (todo) => {},
  updateTodo: (todo,id) => {},
  deleteTodo: (id) => {},
  toggleComplete: (id) => {},
});

export const UseTodo = () => {
  return useContext(TodoContext);
};
export const TodoProvider = TodoContext.Provider;
