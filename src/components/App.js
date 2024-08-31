import React, { useState } from "react";
import "./../styles/App.css";
import TodoList from "./TodoList.js";

const App = () => {
  const [todos, setList] = useState([
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Build a React app", completed: false },
    { id: 3, text: "Deploy the React app", completed: false },
  ]);

  const handleComplete = (id) => {
    const filterData = todos.filter((item) => {
      return item.id !== id
    });
    setList([...filterData]);
  };
  return (
    <div className="container">
      <div className="todo-app">
        <h1>To-Do List</h1>

        <TodoList todos={todos} handleComplete={handleComplete} />
      </div>
    </div>
  );
};

export default App;
