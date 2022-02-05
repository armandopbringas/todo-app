import '../styles/button-todo-creater.css';

const ButtonTodoCreater = () => {
  const printMessage = msg => alert('Click');

  return (
    <div className='button-todo-container'>
      <button 
        className='button-todo-creator'
        onClick={() => printMessage('Click')}
      >
        +
      </button>
    </div>
  );
}

export { ButtonTodoCreater };