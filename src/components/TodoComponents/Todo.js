import React from 'react';

const Todo = props => {
    console.log(props)
    return (
        <div>
            <p>{props.todo.task}</p>
            {/* <p>Completed: {props.todo.completed ? 'True' : 'False'}</p> */}
        </div>
    )
}

export default Todo