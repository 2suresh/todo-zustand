import { useState } from 'react';
import useToDoStore from '../store';

export default function TodoForm() {
  const [text, setText] = useState('');
  const { addTodo } = useToDoStore();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      addTodo({ text, completed: false });
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='d-flex'>
        <input
          type='text'
          placeholder='Enter a task'
          onChange={(e) => setText(e?.target?.value)}
          value={text}
          className='form-control'
        />
        <button
          type='submit'
          className='btn btn-primary'
          onClick={handleSubmit}
        >
          Add Todo
        </button>
      </div>
    </form>
  );
}
