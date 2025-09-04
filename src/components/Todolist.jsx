import React from "react";

function Todolist({ todo, todolist, setTodolist }) {
  const handleDelete = (e) => {
    e.stopPropagation();
    let updatedList = todolist.filter((t) => t.id !== todo.id);
    setTodolist(updatedList);
  };

  const toggleStatus = () => {
    let updatedList = todolist.map((t) =>
      t.id === todo.id ? { ...t, completed: !t.completed } : t
    );
    setTodolist(updatedList);
  };

  return (
    <li
      key={todo.id}
      onClick={toggleStatus}
      style={{
        textDecoration: todo.completed ? "line-through" : "none",
        cursor: "pointer",
      }}
      className="listItem"
    >
      {todo.text}
      <button onClick={handleDelete} className="deleteButton">
        &times;
      </button>
    </li>
  );
}

export default Todolist;
