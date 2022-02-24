import React, { useState, useEffect } from 'react';
import '../styles/app.css';
import UI from '../UI';

const useLocalStorage = (itemName, initialValue) => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [item, setItem] = useState(initialValue);

  useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
          setItem(parsedItem);
          setLoading(false);
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }
      } catch(error) {
        setError(error);
      }
    }, 1500);
  });

  const saveItem = newItem => {
    try {
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);
      setItem(newItem);
    } catch {
      setError(error);
    }
  };

  return { item, saveItem, loading, error };
}

const App = () => {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage('TODOS_V1', [])
  const [searchValue, setSearchValue] = useState('');
  const completedTodos = todos.filter(todo => !!todo.completed);
  const completedTodosLength = completedTodos.length;
  const totalTodos = todos.length;
  let searchedTodos = [];
  
  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  }
  else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      const textHasLowerCase = todoText.includes(searchText);
      return textHasLowerCase;
    });
  }

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
    <UI
      loading={loading}
      error={error}
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
