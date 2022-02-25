import { AppContext } from "../context";
import { useContext } from 'react';
import Header from "../components/header";
import { ButtonTodoCreater } from "../components/button-todo-creater";
import { TodoCounter } from "../components/todo-counter";
import { TodoItem } from "../components/todo-item";
import { TodoList } from "../components/todo-list";
import { TodoSearch } from "../components/todo-search";
import { Modal } from "../components/modal";
import Form from "../components/form";

const UI = () => {
  const { error, loading, searchedTodos, completeTodo, deleteTodo, openModal, setOpenModal, } = useContext(AppContext);

  return (
    <>
      <Header />
      <div className='app'>
        <TodoCounter />
        <TodoSearch />
        <TodoList>
          {error && <p>Desespérate, hubo un error...</p>}
          {loading && <p>Estamos cargando, no desesperes...</p>}
          {(!loading && !searchedTodos.length) && <p>¡Crea tu primer TODO!</p>}
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
        {!!openModal && (
          <Modal>
            <Form />
          </Modal>
        )}
        <ButtonTodoCreater setOpenModal={setOpenModal} />
      </div>
    </>
  );
}
 
export default UI;