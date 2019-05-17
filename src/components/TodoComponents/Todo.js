import React from "react";

const Todo = props => {
    return (
        <div
        className={`task${props.todo.completed ? " completed" : ""}`}
        onClick={() => props.toggleTask(props.todo.id)}
        >
        <p>{props.todo.task}</p>
        {/* <p>Completed: {props.todo.completed ? 'True' : 'False'}</p> */}
        </div>
    );
};

export default Todo;
