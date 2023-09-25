import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, {useState} from "react";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export default function Todo({task, toggleComplete, deleteTodo, editTodo}) {
    return(
<div className="Todo">
            <p onClick={() => toggleComplete(task.id)}
            className={`${task.completed ? 'completed': ""}`}>
            {task.task}
            </p>
            <div className="todo-icons">
                <FontAwesomeIcon icon={faPenToSquare} onClick={() => editTodo(task.id)} className="edt-icn" />
                <FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(task.id)} className="del-icn" />
            </div>
        </div>
    );
}