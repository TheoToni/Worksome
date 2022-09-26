import React from "react";
import { nanoid } from "nanoid";
import styles from "./Note.module.css";
import Logo from "../components/Logo";
import greenfolder from "../pictures/greenfolder.png";
import orangefolder from "../pictures/orangefolder.png";
import whitefolder from "../pictures/whitefolder.png";
import purplefolder from "../pictures/purplefolder.png";
import Clock from "../components/Clock";
import SingleNote from "../components/SingleNote";
import { useState } from "react";
function Note() {
  const [notes, setNotes] = useState({});

  function createNote() {
    console.log("creating note");
  }
  return (
    <div styles={styles}>
      <h1>
        Not<span className="titlespan">es</span>
      </h1>
      <img onClick={createNote} src={greenfolder} alt="" />
      <img onClick={createNote} src={orangefolder} alt="" />
      <img onClick={createNote} src={whitefolder} alt="" />
      <img onClick={createNote} src={purplefolder} alt="" />
      <Logo></Logo>
      <Clock></Clock>
      <SingleNote></SingleNote>
    </div>
  );
}

export default Note;
