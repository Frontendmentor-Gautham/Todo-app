import React, { useEffect, useState } from 'react'
import './TodoItem.css'
import cross from '../images/icon-cross.svg'
import { Draggable } from 'react-beautiful-dnd';

const TodoItem = (props) => {

    const [isChecked,setIsChecked] = useState(false);

    function checkingBox(){
        if (isChecked === 'false') {
            setIsChecked('true');
          } else {
            setIsChecked('false');
          }
    }

    

  return (
    <div>
            <li 
            className={`${isChecked}`}> <button onClick={checkingBox} className={`${isChecked}-state checker`} /> {props.text}   <img
              onClick={() => {
                  props.onChecked(props.id);
              }}
            src={cross} /></li>
           </div>
  )
}

export default TodoItem
