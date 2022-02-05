import React from 'react';
import '../styles/todo-search.css';

function TodoSearch({ searchValue, setSearchValue }) {

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