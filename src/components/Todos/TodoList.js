import Todo from "./Todo";
import styles from './TodoList.module.css'

function TodoList({todos, deleteTodo}) {
   return  (<div className={styles.todoListContainer}>
       {!!todos.length ? todos.map((todo, index) => <Todo todo={todo} key={index} index={index} deleteTodo={deleteTodo}/>) : <h2>There are no todos...</h2>}
    </div>)
}
export default TodoList