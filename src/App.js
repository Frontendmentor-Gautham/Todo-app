
import './App.css';

import moon from './images/icon-moon.svg'
import sun from './images/icon-sun.svg';
import InputArea from './Components/InputArea';
import TodoItem from './Components/TodoItem';
import { useEffect, useState } from 'react';




function App() {

  const [mode,setMode] = useState('light');
  const [items, setItems] = useState([]);


  function AddItem(inputText) {
    setItems(prevItems => {
      return [...prevItems, inputText];
    });
  }

  function deleteItem(id) {
    setItems(prevItems => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

    const toggleMode = () => {
        if (mode === 'light') {
          setMode('dark');
        } else {
          setMode('light');
        }
      };
    
      useEffect(() =>{
        switch (mode) {
            case 'light':
              document.body.classList.remove('dark');
              break;
            case 'dark':
              document.body.classList.add('dark');
              break;
          }
      },[mode])

  return (
    <>
      <header className={`${mode}-mode`}>
      <div className='header-content'>
        <div className='header-heading'>
            <h1>TODO</h1>
            <img onClick={toggleMode} className={`moon-${mode}`} src={moon} alt='moon icon'></img>
            <img onClick={toggleMode} className={`sun-${mode}`} src={sun} alt='sun icon'></img>
            
        </div>
        <InputArea mode ={mode} onAdd ={AddItem}/>
      </div>
    </header>

    <section>
      <div className='todo-list'>
        <ul className={`list-${mode}`}>
          {items.map((todoItem, index) => (
            <TodoItem
              key={index}
              id={index}
              text={todoItem}
              onChecked={deleteItem}
            />
          ))}
        </ul>
      </div>
    </section>
    </>
    
  );
}

export default App;
