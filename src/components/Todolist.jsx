// import React, { useState } from 'react'

// function Todolist({todo, key, todolist, setTodolist}) {
//   const HandleDelete=(e)=>{
//     e.stopPropagation();  //  prevents triggering strike when delete is clicked
//      let updatedList=todolist.filter((v,i)=> i!==key)
//           setTodolist(updatedList);
//       }
//       const[status, setStatus]= useState(false)
//       let checkStatus=() =>{
//         setStatus(!status)
//       }
//   return (
//       <li onClick={checkStatus} style={{
//         textDecoration: status ? "line-through" : "none", //  toggle style
//         cursor: "pointer"
//       }}
//       className="listItem">{key+1}. {todo}<button onClick={HandleDelete}
//        className="deleteButton">&times;</button>
//        </li>
//   )
// }

// export default Todolist

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
