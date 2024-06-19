import React from 'react';
import {Todos} from "./components/Todos";
import {NewTodo} from "./components/NewTodo";
import {TodoContextProvider} from "./store/todoContext";

function App() {

  return (
    <TodoContextProvider>
      <NewTodo/>
      <Todos/>
    </TodoContextProvider>
  );
}

export default App;
