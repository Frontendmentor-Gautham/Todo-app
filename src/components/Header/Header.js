import React, { useEffect, useState } from 'react'
import './Header.css'
import moon from '../../images/icon-moon.svg'
import sun from '../../images/icon-sun.svg'

const Header = () => {

    const [mode,setMode] = useState('light');

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
    <header className={`${mode}-mode`}>
      <div className='header-content'>
        <div className='header-heading'>
            <h1>TODO</h1>
            <img onClick={toggleMode} className='moon-icon' src={moon} alt='moon icon'></img>
            
        </div>
        <input className={`text-input-${mode}`} type='text'/>
      </div>
    </header>
  )
}

export default Header
