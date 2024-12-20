import useToDoStore from '../store';

export default function TodoList() {
  const todos = useToDoStore((state) => state.todos);
  const toggleTodo = useToDoStore((state) => state.toggleTodo);
  const deleteTodo = useToDoStore((state) => state.deleteTodo);

  return (
    <div>
      {todos?.map((todo, index) => (
        <div
          className='todo-item'
          key={index}
        >
          <span className={todo?.completed ? 'completed' : ''}>
            {todo?.text}
          </span>
          <button
            className='btn btn-success'
            disabled={todo?.completed}
            onClick={() => toggleTodo(index)}
          >
            Complete
          </button>
          <button
            className='btn btn-danger'
            onClick={() => deleteTodo(index)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}
