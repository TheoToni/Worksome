import React from "react";
import styles from "./Todo.module.css";
import Logo from "../components/Logo";
import Clock from "../components/Clock";
import Search from "../components/Search";
import { useState } from "react";
import postgreen from "../pictures/postgreen.png";
function Todo() {
  const [searchText, setSearchText] = useState("");
  return (
    <div styles={styles}>
      <h1>
        To<span className="titlespan2">dos</span>
      </h1>
      <Logo></Logo>
      <Clock></Clock>
      <Search handleSearchNote={setSearchText}></Search>
      <div className="todocontainer"></div>
    </div>
  );
}

export default Todo;
