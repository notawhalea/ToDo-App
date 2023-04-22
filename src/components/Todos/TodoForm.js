import {useState} from "react";

function TodoForm({addTodos}) {
    const [text, setText] = useState('')
    const addTodoHandler = (event) => {
        event.preventDefault()
        addTodos(text)
        setText('')
    }
    return (
        <form onSubmit={addTodoHandler}>
            <input value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter new todo" />
            <button type="submit">Submit</button>
        </form>
    )
}
export default TodoForm