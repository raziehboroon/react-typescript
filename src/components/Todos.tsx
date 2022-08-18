import styles from "./Todos.module.css";
import TodoItem from "./TodoItem";
import { useContext } from "react";
import { TodosContext } from "../store/todos-context";
const Todos: React.FC = () => {
  const todosObj = useContext(TodosContext);
  return (
    <ul className={styles.todos}>
      {todosObj.items.map((item) => (
        <TodoItem
          key={item.id}
          text={item.text}
          // id={item.id}
          removeTodo={todosObj.removeTodo.bind(null, item.id)}
        />
        // <li key={item.id}>{item.text}</li>
      ))}
    </ul>
  );
};

export default Todos;
