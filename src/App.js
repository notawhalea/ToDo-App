import './App.css';
import TodoForm from "./components/Todos/TodoForm";
import TodoList from "./components/Todos/TodoList";
import {useState} from "react";

function App() {
  const [todos, setTodos] = useState([])
  const addTodoHandler = (text) => {
      setTodos([...todos, text])
  }
  const deleteTodoHandler = (index) => {
      setTodos(todos.filter((todo, idx) => idx !== index))
  }
  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm addTodos={addTodoHandler}/>
      <TodoList todos={todos} deleteTodo={deleteTodoHandler}/>
    </div>
  );
}

export default App;
