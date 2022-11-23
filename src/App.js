
import './App.css';

import moon from './images/icon-moon.svg'
import sun from './images/icon-sun.svg';
import InputArea from './Components/InputArea';
import TodoItem from './Components/TodoItem';
import { useEffect, useState } from 'react';
import { DragDropContext, Droppable , Draggable } from 'react-beautiful-dnd';




function App() {

  const [mode,setMode] = useState('light');
  const [items, setItems] = useState([]);
  const LOCAL_STORAGE = "Todos";

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

  function handleOnDrag(res){
      const todosCopy = {...items};
      const [reorderedItems] = todosCopy.splice(res.source.index,1);
      todosCopy.splice(res.destination.index,0,reorderedItems);
      setItems(todosCopy);
  }

    const toggleMode = () => {
        if (mode === 'light') {
          setMode('dark');
        } else {
          setMode('light');
        }
      };

      useEffect(()=>{
        const retrieve = JSON.parse(localStorage.getItem(LOCAL_STORAGE));
        if(retrieve){
          setItems(retrieve);
        }
      },[])
    
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

      useEffect(()=>{
        localStorage.setItem(LOCAL_STORAGE,JSON.stringify(items))
      },[items])

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
        <DragDropContext onDragEnd={handleOnDrag}>
          <Droppable droppableId="todos">
             {
              (provided)=>(
                  <ul className={`list-${mode} todos`} ref={provided.innerRef} {...provided.droppableProps}>
                {items.map((todoItem, index) => (
                  
                  <Draggable key={todoItem.id} draggableId={todoItem.id} index={index}>
                    {
                      
                      (provided) => (
                          <TodoItem
                          ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}
                        index={index}
                        key={index}
                        id={index}
                        text={todoItem}
                        onChecked={deleteItem}
                        />
                      )
                    }
                  </Draggable>
                ))}
              </ul>
              )
             }  
          </Droppable>
        </DragDropContext>
      </div>
    </section>
    </>
    
  );
}

export default App;
