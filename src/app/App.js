import React, { useState } from 'react';
import '../styles/app.css';
import UI from '../UI';

const defaultTodos = [
  {text:'Todo one', completed: true},
  {text:'Todo two', completed: false},
  {text:'Todo three', completed: false}
];

const App = () => {
  const [todos, setTodos] = useState(defaultTodos);
  const [searchValue, setSearchValue] = useState('');
  const completedTodos = todos.filter(todo => !!todo.completed);
  const completedTodosLength = completedTodos.length;
  const totalTodos = todos.length;
  let searchedTodos = [];
  
  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      const textHasLowerCase = todoText.includes(searchText);
      return textHasLowerCase;
    });
  }

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    setTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  };

  return (
    <UI 
      totalTodos={totalTodos}
      completedTodosLength={completedTodosLength}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
      searchedTodos={searchedTodos}
    />
  );
}

export default App;
