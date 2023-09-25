import React from "react";
import './App.css';
import TodoWrapper from "./components/TodoWrapper";

export default function App() {
  return (
    <div className="App">
      <h2>Quick Notes</h2>
      <p className="sub-head">Seamless notepad, Anywhere, Anytime.</p>
      <TodoWrapper />
    </div>
  );
}

