import React from "react";
import Todo from "../models/todo";
import classes from './TodoItem.module.css'

const TodoItem: React.FC<{ text: string, onRemoveTodo: () => void }> = (props) => {
  return <li className={classes.item} onClick={props.onRemoveTodo}>{props.text}</li>;
};

export default TodoItem;
