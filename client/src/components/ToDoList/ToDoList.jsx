import React from 'react';
import { useGetAllTodoQuery } from '../../reducer';
import ToDoItem from "../ToDoItem/ToDoItem"
const ToDoList = () => {
  const { data } = useGetAllTodoQuery();
  console.log(data);
  const todos = data || [];
  return (
    <ul className="App__list">
          {todos.length > 0 && todos.map((todo, index) => (<ToDoItem todo={todo} key={index} />))}
      </ul>
  );
}

export default ToDoList;
