import React from 'react';
import Todo from './Todo'

const TodoList = props => {
    return (
        <div>
            <h2>List your todo items here:</h2>
            {props.todos.map(todo => {
                return <Todo key={todo.id} todo={todo} />
            })}

        </div>

    )
}

export default TodoList