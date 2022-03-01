import React, { useContext } from 'react';
import { AppContext } from '../context';
import '../styles/button-todo-creater.css';

const ButtonTodoCreater = () => {
  const { setOpenModal } = useContext(AppContext);
  const openModalWindow = () => setOpenModal(prevState => !prevState);

  return (
    <div className='button-todo-container'>
      <button 
        className='button-todo-creator'
        onClick={openModalWindow}
      >
        +
      </button>
    </div>
  );
}

export { ButtonTodoCreater };