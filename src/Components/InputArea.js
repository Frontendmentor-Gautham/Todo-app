import React from 'react'
import { useState } from 'react';
import './InputArea.css'

const InputArea = ({mode,onAdd}) => {

    const [inputText, setInputText] = useState("");

    function handleChange(event) {
        const newValue = event.target.value;
        setInputText(newValue);
    }

  return (
    <div className="form">
      <input className={`text-input-${mode}`} onChange={handleChange} type="text" value={inputText} />
      <button className={`btn-${mode}`}
        onClick={() => {
          onAdd(inputText);
          setInputText("");
        }}
      >
        <span>Add</span>
      </button>
    </div>
  )
}

export default InputArea
