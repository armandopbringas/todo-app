import '../styles/todo-item.css';

const TodoItem = props => {
  return (
    <li className='todo-item'>
      <div className='todo-text'>
        <span 
          onClick={props.onComplete}
          className={`icon icon-check ${props.completed && 'icon-check--active'}`}
        >
          -
        </span>
        <p 
          className={`TodoItem-p ${props.completed && 'todo-item-p--complete'}`}
        >
          {props.text}
        </p>
      </div>
      <span
        onClick={props.onDelete} 
        className='icon icon-delete'
      >
        X
      </span>
    </li>
  );
}

export { TodoItem };
