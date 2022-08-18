import React, { useState } from "react";
import "./App.css";
import Todos from "./components/Todos";
import Todo from "./models/todo";
import NewTodo from "./components/NewTodo";
function App() {
  // const todos = [new Todo("learn react"), new Todo("learn typescript")];
  const [todos, setTodos] = useState<Todo[]>([]);

  const addToDoHandler = (text: string) => {
    setTodos((prevTodos) => {
      const newTodo = new Todo(text);
      return prevTodos.concat(newTodo);
    });
  };

  const removeTodoHandler = (id: string) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <NewTodo onAddTodo={addToDoHandler} />
      <Todos items={todos} removeTodo={removeTodoHandler} />
    </div>
  );
}

export default App;
