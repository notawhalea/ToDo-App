import React from "react";
import Button from "../UI/Button";
import {RiDeleteBin2Line, RiRefreshLine} from "react-icons/ri";
import styles from './TodosActions.module.css'

function TodosActions({resetTodo, deleteCompletedTodo, completedTodosExist}) {
    return (
        <div className={styles.todosActionsContainer}>
            <Button onClick={resetTodo} title="Reset Todos"><RiRefreshLine /></Button>
            <Button onClick={deleteCompletedTodo} title="Clear Completed Todos" disabled={!completedTodosExist}><RiDeleteBin2Line /></Button>
        </div>
    )
}

export default TodosActions