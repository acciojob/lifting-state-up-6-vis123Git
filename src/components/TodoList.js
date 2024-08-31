import React from "react";
import "./todolist.css";
function TodoList({ todos, handleComplete }) {
  return (
    <div className="todolistdata">
      <ul>
        {todos.map((item) => {
          return (
            <li key={item.id} className="todolistitem">
              <span> {item.text}</span>
              <button onClick={() => handleComplete(item.id)}>complete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default TodoList;
