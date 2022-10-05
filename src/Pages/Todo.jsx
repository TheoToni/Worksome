import React from "react";
import styles from "./Todo.module.css";
import Logo from "../components/Logo";
import Clock from "../components/Clock";
import Search from "../components/Search";
import { useState, useEffect } from "react";
import SingleTodo from "../components/Todo/SingleTodo";
import { nanoid } from "nanoid";

function Todo() {
  const [searchText, setSearchText] = useState("");
  const [todos, setTodos] = useState([
    {
      text: "note",
      id: nanoid(),
      date: new Date().toLocaleDateString(),
      key: nanoid(),
    },
  ]);

  function inputHandler(text) {}

  useEffect(() => {
    localStorage.setItem("react-todo-data", JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("react-todo-data"));
    if (data) {
      setTodos(data);
    }
  }, []);

  return (
    <div styles={styles}>
      <h1>
        Not<span className="titlespan">es</span>
      </h1>
      <Logo></Logo>
      <Clock></Clock>
      <Search handleSearchNote={setSearchText}></Search>
      <div className="TodoContainer">
        {todos.map((todo) => {
          return <SingleTodo text={todo.text}></SingleTodo>;
        })}
      </div>
    </div>
  );
}

export default Todo;
