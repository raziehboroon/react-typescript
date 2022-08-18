import styles from "./Todos.module.css";
import Todo from "../models/todo";
import TodoItem from "./TodoItem";
const Todos: React.FC<{ items: Todo[]; removeTodo: (id: string) => void }> = (
  props
) => {
  return (
    <ul className={styles.todos}>
      {props.items.map((item) => (
        <TodoItem
          key={item.id}
          text={item.text}
          // id={item.id}
          removeTodo={props.removeTodo.bind(null, item.id)}
        />
        // <li key={item.id}>{item.text}</li>
      ))}
    </ul>
  );
};

export default Todos;
