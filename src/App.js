import React, { useState } from "react";

function App() {
  // State to manage tasks
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  // Add task function
  const addTask = () => {
    if (newTask.trim() === "") return;
    setTasks([...tasks, newTask]);
    setNewTask("");
  };

  // Remove task function
  const removeTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4">To-Do List</h1>

      {/* Input & Add Button */}
      <div className="flex gap-2">
        <input
          type="text"
          className="border p-2 rounded"
          placeholder="Enter task..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={addTask}>
          Add Task
        </button>
      </div>

      {/* Task List */}
      <ul className="mt-4 w-64">
        {tasks.map((task, index) => (
          <li key={index} className="flex justify-between bg-white p-2 mb-2 shadow rounded">
            {task}
            <button className="text-red-500" onClick={() => removeTask(index)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
