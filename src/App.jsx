import { useState, useEffect } from "react";
import "./App.css";
import Todolist from "./components/Todolist";

function App() {
  const [todolist, setTodolist] = useState(() => {
    // Load from localStorage when app starts
    const savedTodos = localStorage.getItem("todolist");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });
  
  const [error, setError] = useState(""); // ⚡ for error message
  useEffect(() => {
    // Save to localStorage whenever todolist changes
    localStorage.setItem("todolist", JSON.stringify(todolist));
  }, [todolist]);
  const saveList = (event) => {
    event.preventDefault(); //prevent form to load
    let task = event.target.task.value.trim(); // preventing empty or whitespace-only

    //  Block empty input
    if (task === "") {
      setError("⚠️ Task cannot be empty");
      return;
    }
    if (
      !todolist.some((todo) => todo.text.toLowerCase() === task.toLowerCase())
    ) {
      setTodolist([
        ...todolist,
        { id: Date.now(), text: task, completed: false },
      ]);
      setError(""); //  clear error on successful add
    } else {
      setError("⚠️ This task already exists");
    }

    event.target.task.value = "";
  };
  let List = todolist.map((todo) => {
    return (
      <Todolist
        key={todo.id} // ✅ stable key
        todo={todo}
        todolist={todolist}
        setTodolist={setTodolist}
      />
    );
  });
  return (
    <div className="container">
      <h1>My To-Do List</h1>
      <form onSubmit={saveList}>
        <input
          type="text"
          name="task"
          className="inputText"
          placeholder="Enter Task"
          onChange={() => setError("")} // ✅ clear error when user types again
        />
        <button className="btn">Save</button>
      </form>
      {/* ⚡ Inline error message */}
      {error && <p style={{ color: "red", marginTop: "5px" }}>{error}</p>}
      <ul className="displayList">{List}</ul>
    </div>
  );
}

export default App;
