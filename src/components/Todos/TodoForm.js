import {useState} from "react";
import styles from "./TodoForm.module.css"

function TodoForm({addTodos}) {
    const [text, setText] = useState('')
    const addTodoHandler = (event) => {
        event.preventDefault()
        addTodos(text)
        setText('')
    }
    return (
        <div className={styles.todoFormContainer}>
            <form onSubmit={addTodoHandler}>
                <input value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter new todo" />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
export default TodoForm