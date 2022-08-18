import React from "react";
import styles from "./TodoItem.module.css";
const TodoItem: React.FC<{
  text: string;
  // id: string;
  removeTodo: () => void;
}> = (props) => {
  return (
    <li className={styles.item} onClick={() => props.removeTodo()}>
      {props.text}
    </li>
  );
};

export default TodoItem;
