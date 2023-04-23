import Todo from "./Todo";
import styles from './TodoList.module.css'

function TodoList({todos, deleteTodo, toggleTodo}) {
   return  (<div className={styles.todoListContainer}>
       {!!todos.length ? todos.map((todo) => <Todo todo={todo} key={todo.id} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />) : <h2>There are no todos...</h2>}
    </div>)
}
export default TodoList