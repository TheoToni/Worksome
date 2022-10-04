import React from "react";
import styles from "./Todo.module.css";
import Logo from "../components/Logo";
import Clock from "../components/Clock";
import Search from "../components/Search";
import { useState } from "react";
import SingleTodo from "../components/Todo/SingleTodo";

function Todo() {
  const [searchText, setSearchText] = useState("");
  return (
    <div styles={styles}>
      <h1>
        Not<span className="titlespan">es</span>
      </h1>
      <Logo></Logo>
      <Clock></Clock>
      <Search handleSearchNote={setSearchText}></Search>
      <div className="TodoContainer">
        <SingleTodo></SingleTodo>
      </div>
    </div>
  );
}

export default Todo;
