import { useState } from "react";
function TodoItem({ task, deleteTask, toggleEditTask, updateTask }) {
  const [editedText, setEditedText] = useState(task.text);
  return (
    <li className="task-item">
      {" "}
      {task.isEditing ? (
        <input
          type="text"
          className="edit-input"
          value={editedText}
          onChange={(e) => setEditedText(e.target.value)}
          onBlur={() => {
            updateTask(editedText);
            toggleEditTask();
          }}
        />
      ) : (
        <span>{task.text}</span>
      )}{" "}
      <div className="btn-group">
        {" "}
        <button
          className={`edit-btn ${task.isEditing ? "save-mode" : ""}`}
          onClick={toggleEditTask}
        >
          {task.isEditing ? "Save" : "Edit"}
        </button>{" "}
        <button className="delete-btn" onClick={deleteTask}>
          {" "}
          Delete{" "}
        </button>{" "}
      </div>{" "}
    </li>
  );
}
export default TodoItem;
