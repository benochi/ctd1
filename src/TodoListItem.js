import React, { useState } from "react";
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";
import InputWithLabel from "./InputWithLabel";

//Function creates list item with remove button. Add checkbox, edit, favorite here.

const TodoListItem = ({ todo, onRemoveTodo, onEditClick}) => {
  console.log(todo);
  return (
      
    <li key={todo.id}>
      
      {todo.title}

      <button type="button" onClick={() => onEditClick(todo.Title)}>Edit</button>
      <button type="button" onClick={() => onRemoveTodo(todo.id)}>Remove Button</button>
      
    </li>       
  );
};

export default TodoListItem;