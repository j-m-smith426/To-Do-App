import React from 'react';
import { useSelector } from 'react-redux';
import ToDoItem from "../ToDoItem/ToDoItem"
const ToDoList = () => {
    const todos = useSelector((state) => {
        console.log(state);
        return state.todos;
      });
  return (
    <ul className="App__list">
          {todos.length > 0 && todos.map((todo, index) => (<ToDoItem todo={todo} key={index} />))}
      </ul>
  );
}

export default ToDoList;
