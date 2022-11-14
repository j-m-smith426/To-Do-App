import React from 'react';
import { useDeleteTodoMutation, useUpdateTodoMutation } from '../../reducer';

import "./ToDoItem.scss";

const ToDoItem = (props) => {
  const [update, updateRes] = useUpdateTodoMutation();
  const [deleteTodo, deleteRes] = useDeleteTodoMutation();
    const todo = props.todo;
    const key = todo.idtodo;
    const name = todo.Name;
    

  const handleConfirm = () => {
    const updatedTodo = {
      ...todo,
      Completed: true
    }
    
    update({ todo: updatedTodo });
  }
  
  const handleDelete = () => {
    deleteTodo(todo);
}
  return (
      <li className={`todoItem ${todo.Completed && 'completed'}`} key={key}>
      <h2 className={`todoItem--name ` } >{name}</h2>
          <div className='todoItem__buttons'>
              
          <button className='todoItem--confirm' onClick={() =>handleConfirm()}>&#x2714;</button>
          <button className='todoItem--delete' onClick={() =>handleDelete()}>&#x2716;</button>
          </div>
    </li>
  );
}

export default ToDoItem;
