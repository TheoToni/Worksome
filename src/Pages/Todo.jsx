import React from "react";
import styles from "./Todo.module.css";
import Logo from "../components/Logo";

function Todo() {
  return (
    <div styles={styles}>
      <h1>Todos</h1>
      <Logo></Logo>
    </div>
  );
}

export default Todo;
