import React from 'react';

const TodoForm = props => {
    return (
        <form onSubmit={props.addTodo}>
            <input
                type="text"
                placeholder="Write your todo here..."
                name="task"

                onChange={props.onInputChange}
            />
            <button onClick={props.addTodo}>Add todo</button>
            <button>Clear Completed</button>
        </form>
    )

}

export default TodoForm