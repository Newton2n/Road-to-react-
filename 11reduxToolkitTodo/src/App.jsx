import { use } from "react";
import "./App.css";
import TodoForm from "./components/todoForm";
import TodoItem from "./components/todoItem";
import { useSelector } from "react-redux";

function App() {
  const todos = useSelector((data) => data.todoStore.todos);

  return (
    <>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {todos.map((item) => (
              <div key={item.id} className="w-full">
                <TodoItem todo={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
