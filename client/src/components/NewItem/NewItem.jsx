import React, { useState } from 'react';
import { writeToDo } from '../../firebase';
import "./NewItem.scss"

const NewItem = () => {
    const [input, setInput] = useState("");

    const handelAdd = () => {
        //Fix new item
        setInput("");
}

  return (
    <div className='NewItem'>
          <label htmlFor="input" className='NewItem__label'>New TODO:</label>
          <input className='NewItem__input' type="text" name='input' value={input} onChange={(e) => setInput(e.target.value)} />
          <button className='NewItem__button' onClick={handelAdd}>Add</button>
    </div>
  );
}

export default NewItem;
