import React, { useState, createContext } from 'react';
import { useLocalStorage } from './useLocalStorage';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage('TODOS_V1', [])
  const [searchValue, setSearchValue] = useState('');
  const [openModal, setOpenModal] = React.useState(false);
  const completedTodos = todos.filter(todo => !!todo.completed);
  const completedTodosLength = completedTodos.length;
  const totalTodos = todos.length;
  let searchedTodos = [];
  
  if (!searchValue.length >= 1)searchedTodos = todos;
  else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      const textHasLowerCase = todoText.includes(searchText);
      return textHasLowerCase;
    });
  }

  const addTodo = text => {
    const newTodos = [...todos];
    newTodos.push({ completed: false, text});
    saveTodos(newTodos);
  };

  const completeTodo = text => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  return (
    <AppContext.Provider value={{
      loading,
      error,
      totalTodos,
      completedTodos,
      completedTodosLength,
      searchValue,
      setSearchValue,
      addTodo,
      completeTodo,
      deleteTodo,
      searchedTodos,
      openModal,
      setOpenModal,
    }}>
      { children }
    </AppContext.Provider>
  );
}

export { AppContext, AppProvider };