import '../styles/todo-counter.css';

const TodoCounter = ({ total, completed }) => {
  return (
    <h3 className='todo-counter'>
      Completed {completed} of {total} TODOs
    </h3>
  );
}
 
export { TodoCounter };