import React, { useState } from "react";
import "./../styles/App.css";
import TodoList from "./TodoList.js";

const App = () => {
  const [todos, setList] = useState([
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Build a React app", completed: false },
    { id: 3, text: "Deploy the React app", completed: false },
  ]);
  const handleInput = () => {
    const input = document.getElementById("input");
    const value = input.value.trim();
    if (value) {
      setList([...todos, { id: Date.now(), text: value }]);
      input.value = "";
    }
  };

  const handleComplete = (id) => {
    const filterData = todos.filter((item) => {
      return item.id !== id;
    });
    setList([...filterData]);
  };
  return (
    <div className="container">
      <div className="todo-app">
        <h1>To-Do List</h1>
        {/* <div className="inputcontainer">
          <input type="text" id="input"></input>
          <button onClick={handleInput}>Add Todo</button>
        </div> */}
        <TodoList todos={todos} handleComplete={handleComplete} />
      </div>
    </div>
  );
};

export default App;
