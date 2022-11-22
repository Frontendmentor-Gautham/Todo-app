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
    <Draggable draggableId={props.id} index={props.index}>
      {
        (provided) => (
          <div>
            <li 
            ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}
            className={`${isChecked}`}> <button onClick={checkingBox} className={`${isChecked}-state checker`} /> {props.text}   <img
              onClick={() => {
                  props.onChecked(props.id);
              }}
            src={cross} /></li>
           </div>
        )
      }
    </Draggable>
  )
}

export default TodoItem
