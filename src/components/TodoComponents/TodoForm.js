import React from "react";

const TodoForm = props => {
  return (
    <form onSubmit={e => props.addTodo(e, props.task)}>
      <input
        type="text"
        placeholder="Write your todo here..."
        name="task"
        value={props.task}
        onChange={props.onInputChange}
      />
      <button type="submit">Add todo</button>
      <button onClick={e => props.clearCompleted(e)}>Clear Completed</button>
    </form>
  );
};

export default TodoForm;