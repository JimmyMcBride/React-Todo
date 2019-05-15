import React from 'react';

const Todo = props => {
    console.log(props)
    return (
        <div>
            <h4>Todo Title: {props.todo.task}</h4>
            <p>Completed: {props.todo.completed ? 'True' : 'False'}</p>
        </div>
    )
}

export default Todo