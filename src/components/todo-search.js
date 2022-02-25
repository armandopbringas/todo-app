import React, { useContext } from 'react';
import { AppContext } from '../context';
import '../styles/todo-search.css';

const TodoSearch = () => {
  const { searchValue, setSearchValue } = useContext(AppContext);
  const onSearchValueChange = event => {
    const inputTodo = event.target.value;
    const settedTodo = setSearchValue(inputTodo);
    return settedTodo;
  };

  return (
    <input
      className="todo-search"
      placeholder="Write a todo"
      value={searchValue}
      onChange={onSearchValueChange}
    />
  );
}

export { TodoSearch };
