import React, { useContext, useState } from 'react';
import { AppContext } from '../context';
import '../styles/form.css';

const Form = () => {
  const [ newTodoValue, setNewTodoValue ] = useState('');
  const { addTodo, setOpenModal } = useContext(AppContext);
  const onChange = e => setNewTodoValue(e.target.value);
  const onSubmit = e => {
    e.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
  }
  const onCancel = () => {
    setOpenModal(false);
  };

  return (
    <form className='form' onSubmit={onSubmit}>
      <label>Add a new ToDo</label>
      <textarea
        value={newTodoValue}
        onChange={onChange}
        placeholder='Write your todo here'
      />
      <div className='button-wrapper'>
        <button type='submit'>Add</button>
        <button 
          type='button' 
          onClick={onCancel}
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
 
export default Form;