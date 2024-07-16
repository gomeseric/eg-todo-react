import React, { useState } from "react";

export function TodoList() {
  const [todos, setTodos] = useState([
    "Walk dog",
    "Buy groceries",
    "Study",
    "Clean house",
  ]);
  const [task, setTask] = useState("");

  const handleChangeTask = (ev) => {
    setTask(ev.target.value);
  };

  const handleEnter = (ev) => {
    if (ev.key === "Enter" && task.trim() !== "") {
      setTodos([task.trim(), ...todos]);
      setTask("");
    }
  };

  const handleDelete = (index) => {
    const newTodos = todos.filter((todo, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div>
      <input
        className="border"
        value={task}
        onChange={handleChangeTask}
        onKeyDown={handleEnter}
      />

      <ul>
        {todos.map((todo, index) => (
          <li key={index} className="flex items-center justify-between">
            {todo}{" "}
            <button
              onClick={() => handleDelete(index)}
              className="px-1 bg-red-400 hover:bg-red-700 text-white text-xs rounded-lg"
            >
              x
            </button>
          </li>
        ))}
      </ul>

      <div>
        {todos.length > 0 ? (
          <span>{todos.length} items left</span>
        ) : (
          <span>No items left</span>
        )}
      </div>
    </div>
  );
}