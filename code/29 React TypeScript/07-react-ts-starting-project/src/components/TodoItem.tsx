import React from "react";
import {Todo} from "../models/Todo";
import classes from "./TodoItem.module.css";

export const TodoItem: React.FC<{ item: Todo, onRemoveTodo: () => void }> = ({item, onRemoveTodo}) => {

  return <li key={item.id} className={classes.item} onClick={onRemoveTodo}>{item.text}</li>
}
