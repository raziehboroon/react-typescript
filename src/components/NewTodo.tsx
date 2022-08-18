import styles from "./NewTodo.module.css";
import { useRef } from "react";
// import Todo from "../models/todo";
const NewTodo: React.FC<{ onAddTodo: (text: string) => void }> = (props) => {
  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = todoTextInputRef.current!.value;

    if (enteredText.trim().length === 0) {
      // throw errors
      return;
    }
    props.onAddTodo(enteredText);
  };
  return (
    <form className={styles.form} action="" onSubmit={submitHandler}>
      <label htmlFor="text">todo text</label>
      <input type="text" id={"text"} ref={todoTextInputRef} />
      <button>Add</button>
    </form>
  );
};

export default NewTodo;
