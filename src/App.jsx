import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className='container'>
      <h1 className='my-4'>Todo List using Zustand</h1>
      <TodoForm />
      <TodoList />
    </div>
  );
}

export default App;
