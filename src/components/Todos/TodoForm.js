import {useState} from "react";
import styles from "./TodoForm.module.css"
import Button from "../UI/Button";

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
                <Button type="submit" title="Submit">Submit</Button>
            </form>
        </div>
    )
}
export default TodoForm