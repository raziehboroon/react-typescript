import TodosContextProvider from "./store/todos-context";
import "./App.css";
import Todos from "./components/Todos";
import NewTodo from "./components/NewTodo";

function App() {
  // const todos = [new Todo("learn react"), new Todo("learn typescript")];

  return (
    <TodosContextProvider>
      <div>
        <NewTodo />
        <Todos />
      </div>
    </TodosContextProvider>
  );
}

export default App;
