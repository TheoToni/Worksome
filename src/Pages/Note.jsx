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
  const [notes, setNotes] = useState([]);

  function createNoteGreen() {
    setNotes([...notes, { color: "white", backgroundcolor: "green" }]);
  }
  function createNoteWhite() {
    setNotes([...notes, { color: "white", backgroundcolor: "white" }]);
  }
  function createNoteOrange() {
    setNotes([...notes, { color: "white", backgroundcolor: "orange" }]);
  }
  function createNotePurple() {
    setNotes([...notes, { color: "white", backgroundcolor: "purple" }]);
  }
  return (
    <div styles={styles}>
      <Logo></Logo>
      <Clock></Clock>
      <h1>
        Not<span className="titlespan">es</span>
      </h1>
      <img onClick={createNoteGreen} src={greenfolder} alt="" />
      <img onClick={createNoteOrange} src={orangefolder} alt="" />
      <img onClick={createNoteWhite} src={whitefolder} alt="" />
      <img onClick={createNotePurple} src={purplefolder} alt="" />

      <div styles={styles} className="wrapper">
        {notes.map((item) => {
          if (item.backgroundcolor == "green") {
            return (
              <SingleNote
                backgroundcolor="#4dcc31"
                color="#ffffff"
              ></SingleNote>
            );
          }
          if (item.backgroundcolor == "white") {
            return (
              <SingleNote
                backgroundcolor="#ffffff"
                color="#000000"
              ></SingleNote>
            );
          }
          if (item.backgroundcolor == "orange") {
            return (
              <SingleNote
                backgroundcolor="#fe7600"
                color="#ffffff"
              ></SingleNote>
            );
          }
          if (item.backgroundcolor == "purple") {
            return (
              <SingleNote
                backgroundcolor="#a456f0"
                color="#ffffff"
              ></SingleNote>
            );
          }
        })}
      </div>
    </div>
  );
}

export default Note;
