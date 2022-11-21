import React from 'react'
import './TodoItem.css'
import cross from '../images/icon-cross.svg'
import check from '../images/icon-check.svg'

const TodoItem = (props) => {
  return (
    <div>
      <li> {props.text}   <img
        onClick={() => {
            props.onChecked(props.id);
        }}
       src={cross} /></li>
    </div>
  )
}

export default TodoItem
