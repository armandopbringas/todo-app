import { ButtonTodoCreater } from "../components/button-todo-creater";
import Header from "../components/header";
import { TodoCounter } from "../components/todo-counter";
import { TodoItem } from "../components/todo-item";
import { TodoList } from "../components/todo-list";
import { TodoSearch } from "../components/todo-search";

const UI = ({
  totalTodos,
  completedTodosLength,
  searchValue,
  setSearchValue,
  searchedTodos,
  completeTodo,
  deleteTodo
}) => {
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
 
export default UI;