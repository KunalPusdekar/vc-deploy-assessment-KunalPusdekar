import React from "react";

function TodoItem({ task, deleteTask }) {
  return (
    <li className="task-item">
      <span>{task}</span>
      <button className="delete-btn" onClick={deleteTask}>
        Delete
      </button>
    </li>
  );
}

export default TodoItem;
