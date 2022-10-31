import { set } from 'firebase/database';
import React from 'react';
import { updateToDo } from '../../firebase';

import "./ToDoItem.scss";

const ToDoItem = (props) => {
    const todo = props.todo;
    const key = Object.keys(todo)[0];
    const name = todo[key].name;
    

    const handleConfirm = () => {
        todo[key].compleat = true;
        console.log(todo[key]);
        updateToDo(todo);
    }
  return (
      <li className={`todoItem`} key={key}>
          <h2 className='todoItem--name'>{name}</h2>
          <div className='todoItem__buttons'>
              
          <button className='todoItem--confirm'>&#x2714;</button>
          <button className='todoItem--delete'>&#x2716;</button>
          </div>
    </li>
  );
}

export default ToDoItem;
