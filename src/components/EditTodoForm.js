import React, {useState} from "react";

export default function EditTodoForm({editTodo, task}) {
    const [value, setValue] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
    editTodo(value, task.id);
    setValue("");
    }
return(
<div className="todo"> 
    <form className="todoform" onSubmit={handleSubmit}>
<input className="todo-input" type="text" value={value} minLength={1} placeholder="Update Today's Task" 
onChange={(e) => setValue(e.target.value)}/>
<button className="todo-btn" type="submit">Update Task</button>
</form>
</div>
);
}