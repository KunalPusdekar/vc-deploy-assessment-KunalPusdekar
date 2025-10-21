import { useState } from "react";
import TodoItem from "./TodoItem";
import "./App.css";
function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const addTask = () => {
    if (task.trim() === "") return;
    setTasks([...tasks, { text: task, isEditing: false }]);
    setTask("");
  };
  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };
  const toggleEditTask = (index) => {
    const updated = [...tasks];
    updated[index].isEditing = !updated[index].isEditing;
    setTasks(updated);
  };
  const updateTask = (index, newText) => {
    const updated = [...tasks];
    updated[index].text = newText;
    setTasks(updated);
  };
  return (
    <div className="app-container">
      {" "}
      <h1 className="heading">🌟 Todo App</h1>{" "}
      <div className="input-section">
        {" "}
        <input
          type="text"
          placeholder="Enter a task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />{" "}
        <button onClick={addTask}>Add</button>{" "}
      </div>{" "}
      <ul className="task-list">
        {" "}
        {tasks.map((item, index) => (
          <TodoItem
            key={index}
            task={item}
            deleteTask={() => deleteTask(index)}
            toggleEditTask={() => toggleEditTask(index)}
            updateTask={(newText) => updateTask(index, newText)}
          />
        ))}{" "}
      </ul>{" "}
    </div>
  );
}
export default App;
