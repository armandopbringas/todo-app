import '../styles/todo-item.css';

const TodoItem = props => {
  return (
    <li className='todo-item'>
      <span className={`icon icon-check ${props.completed && 'icon-check--active'}`}>
        √
      </span>
      <p className={`TodoItem-p ${props.completed && 'todo-item-p--complete'}`}>
        {props.text}
      </p>
      <span className='icon icon-delete'>
        X
      </span>
    </li>
  );
}

export { TodoItem };