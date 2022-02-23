import React, { useState } from 'react';
import '../styles/app.css';
import Header from '../components/header';
import { TodoCounter } from '../components/todo-counter';
import { TodoSearch } from '../components/todo-search';
import { TodoList } from '../components/todo-list';
import { TodoItem } from '../components/todo-item'
import { ButtonTodoCreater } from '../components/button-todo-creater';

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
    <>
      <Header />
      <div className='app'>
        <TodoCounter
          total={totalTodos}
          completed={completedTodosLength}
        />
        <TodoSearch 
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
        <TodoList>
          {searchedTodos.map(todo => (
            <TodoItem 
              key={todo.text} 
              text={todo.text} 
              completed={todo.completed}
              onComplete={() => completeTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
            />
          ))}
        </TodoList>
        <ButtonTodoCreater />
      </div>
    </>
  );
}

export default App;
