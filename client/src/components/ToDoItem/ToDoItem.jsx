import { set } from 'firebase/database';
import React from 'react';
import { updateToDo } from '../../firebase';

import "./ToDoItem.scss";

const ToDoItem = (props) => {
    const todo = props.todo;
    const key = todo.idtodo;
    const name = todo.Name;
    

  const handleConfirm = () => {
       //Fix update
  }
  
  const handleDelete = () => {
    //Fix delete
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
