import React, {useState} from "react";
import Todo from "./Todo";

export default function TodoForm({addTodo}) {
    const [value, setValue] = useState("");
    const handleSubmit = e => {
        e.preventDefault();
    addTodo(value);
    setValue("");
    }
return(
<div className="todo"> 
    <form className="todoform" onSubmit={handleSubmit}>
<input className="todo-input" type="text" value={value} minLength={1} placeholder="What's the Task Today?" 
onChange={(e) => setValue(e.target.value)}>
</input>
<button className="todo-btn" type="submit">Add Task</button>
</form>
</div>
);
}