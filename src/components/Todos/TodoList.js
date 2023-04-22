import Todo from "./Todo";

function TodoList({todos}) {
    return todos.map((todo, index) => <Todo todo={todo} key={index}/>
    )
}
export default TodoList