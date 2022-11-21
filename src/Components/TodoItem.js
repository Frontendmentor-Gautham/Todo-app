import React, { useEffect, useState } from 'react'
import './TodoItem.css'
import cross from '../images/icon-cross.svg'

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
      <li> <input className={`${isChecked}-state`} onClick={checkingBox} type="radio"/> {props.text}   <img
        onClick={() => {
            props.onChecked(props.id);
        }}
       src={cross} /></li>
    </div>
  )
}

export default TodoItem
