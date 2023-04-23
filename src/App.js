import {useState} from "react";
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import TodoForm from "./components/Todos/TodoForm";
import TodoList from "./components/Todos/TodoList";

function App() {
  const [todos, setTodos] = useState([])
  const addTodoHandler = (text) => {
      const newTodo = {
          text: text,
          isCompleted: false,
          id: uuidv4()
      }
      setTodos([...todos, newTodo])
  }
  const deleteTodoHandler = (id) => {
      setTodos(todos.filter((todo) => todo.id !== id))
  }
  const toggleTodoHandler = (id) => {
      setTodos(todos.map((todo) => {
          return todo.id === id ?
              {...todo, isCompleted: !todo.isCompleted}
              : {...todo}
      }))
  }
  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm addTodos={addTodoHandler}/>
      <TodoList todos={todos} deleteTodo={deleteTodoHandler} toggleTodo={toggleTodoHandler}/>
    </div>
  );
}

export default App;
