import React, {createContext, useState} from "react";
import {Todo} from "../models/Todo";

type TodoContextType = {
  items: Todo[],
  handleAddTodo: (text: string) => void,
  handleRemoveTodo: (id: number) => void
}

export const ToDoContext = createContext<TodoContextType>({
  items: [],
  handleAddTodo: () => {
  },
  handleRemoveTodo: () => {
  }
})

export const TodoContextProvider: React.FC = ({children}) => {

  const [todos, setTodos] = useState<Todo[]>([]);


  const handleAddTodo = (text: string) => {
    setTodos(prevState => {
      return prevState.concat(new Todo(text, new Date().getTime()));
    })
  }

  const handleRemoveTodo = (id: number) => {
    setTodos(prevState => {
      return prevState.filter((todo) => todo.id !== id);
    })
  }

  const ctxValue: TodoContextType = {
    items: todos,
    handleAddTodo,
    handleRemoveTodo,
  }

  return <ToDoContext.Provider value={ctxValue}>
    {children}
  </ToDoContext.Provider>
}
