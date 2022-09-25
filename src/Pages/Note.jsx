import React from "react";
import styles from "./Note.module.css";
import Logo from "../components/Logo";

function Note() {
  return (
    <div styles={styles}>
      <h1>Notes</h1>
      <Logo></Logo>
    </div>
  );
}

export default Note;
