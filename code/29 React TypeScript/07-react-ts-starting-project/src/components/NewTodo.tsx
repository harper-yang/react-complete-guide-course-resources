import React, {useContext, useRef} from "react";
import classes from "./NewTodo.module.css";
import {ToDoContext} from "../store/todoContext";

export const NewTodo: React.FC = () => {

  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const {handleAddTodo} = useContext(ToDoContext)

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const inputText = todoTextInputRef.current!.value;

    if (inputText.trim().length === 0) {
      return;
    }

    handleAddTodo(inputText);
  }

  return <form onSubmit={handleSubmit} className={classes.form}>
    <label htmlFor='text'>Add New Todo</label>
    <input type="text" id='text' ref={todoTextInputRef}/>
    <button>Add Todo</button>
  </form>
}
