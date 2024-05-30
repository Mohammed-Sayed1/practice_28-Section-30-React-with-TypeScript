import React, { ReactNode, useState } from "react";
import Todo from "../models/todo";

type TodosContextObj = {
  items: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: number) => void
}

/** createContext wants on argument that is an object descriping the shape of the todo context */
export const TodosContext = React.createContext<TodosContextObj>({
  items: [],
  addTodo: () => {},
  removeTodo: () => {},
});

const TodosContextProvider: React.FC<{children: ReactNode}> = props => {
    const [todos, setTodos] = useState<Todo[]>([])

  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText)
    setTodos((pervTodos) => {
      return pervTodos.concat(newTodo)
    })
  }

  const removeTodoHandler = (todoId: number) => {
    setTodos(pervTodos => {
      return pervTodos.filter(todo => todo.id !== todoId)
    })
  }

  const contextValue: TodosContextObj = {
    items: todos,
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler
  }
    return <TodosContext.Provider value={contextValue}>{props.children}</TodosContext.Provider>
}

export default TodosContextProvider;