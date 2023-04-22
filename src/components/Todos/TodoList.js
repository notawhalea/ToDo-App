import Todo from "./Todo";
import styles from './TodoList.module.css'

function TodoList({todos}) {
   return  (<div className={styles.todoListContainer}>
       {!!todos.length ? todos.map((todo, index) => <Todo todo={todo} key={index} />) : <h2>There are no todos...</h2>}
    </div>)
}
export default TodoList