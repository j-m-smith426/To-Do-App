import React from 'react';
import { onValue } from "firebase/database";
import { useDispatch } from "react-redux";

import { todoRef } from "../../firebase";

const AppTitle = () => {
    const dispatch = useDispatch();
  
  onValue(todoRef, (snapshot) => {
    if (snapshot.exists()) {
      
      const list = Object.entries((snapshot.val())).map(entry => {
        return {[entry[0]]: entry[1]};
      });

      // if (JSON.stringify(state.todos) !== JSON.stringify(list)) {
        
        dispatch({
          type: 'UPDATE',
          payload: list
        })
      // }
    }
  })
  return (
    <>
      <h2 className="App__title">To Do App</h2>
    </>
  );
}

export default AppTitle;
