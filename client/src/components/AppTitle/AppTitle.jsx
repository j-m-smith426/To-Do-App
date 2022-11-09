import React from 'react';
import { useDispatch } from "react-redux";

const AppTitle = () => {
    const dispatch = useDispatch();
  
  
  return (
    <>
      <h2 className="App__title">To Do App</h2>
    </>
  );
}

export default AppTitle;
