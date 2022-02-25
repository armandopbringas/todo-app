import { useContext } from 'react';
import { AppContext } from '../context';
import '../styles/todo-counter.css';

const TodoCounter = () => {
  const { totalTodos, completedTodos } = useContext(AppContext);

  return (
    <h3 className='todo-counter'>
      Completed {completedTodos} of {totalTodos} TODOs
    </h3>
  );
}
 
export { TodoCounter };