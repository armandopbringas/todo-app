import '../styles/app.css';
import Header from '../components/header';
import { TodoCounter } from '../components/todo-counter';
import { TodoSearch } from '../components/todo-search';
import { TodoList } from '../components/todo-list';
import { TodoItem } from '../components/todo-item'
import { ButtonTodoCreater } from '../components/button-todo-creater';

const todos = [
  {text:'Cortar cebolla', completed:false},
  {text:'Tormar el curso de intro a react', completed:false},
  {text:'Llorar con la llorona', completed:false}
];

const App = () => {
  return (
    <>
      <Header />
      <div className='app'>
        <TodoCounter />
        <TodoSearch />
        <TodoList>
          {todos.map(todo =>(<TodoItem key={todo.text} text={todo.text} />))}
        </TodoList>
        <ButtonTodoCreater />
      </div>
    </>
  );
}

export default App;