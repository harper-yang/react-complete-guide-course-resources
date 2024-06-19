import React, {useContext} from "react";
import {TodoItem} from "./TodoItem";
import classes from "./Todos.module.css";
import {ToDoContext} from "../store/todoContext";

export const Todos: React.FC = () => {

  const {items, handleRemoveTodo} = useContext(ToDoContext);

  return <ul className={classes.todos}>
    {items.map(item =>
      <TodoItem item={item} key={item.id} onRemoveTodo={handleRemoveTodo.bind(null, item.id)}/>)}
  </ul>
}
