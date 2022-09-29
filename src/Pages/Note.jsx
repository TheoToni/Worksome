import React from "react";
import { nanoid } from "nanoid";
import styles from "./Note.module.css";
import Logo from "../components/Logo";
import greenfolder from "../pictures/greenfolder.png";
import orangefolder from "../pictures/orangefolder.png";
import whitefolder from "../pictures/whitefolder.png";
import purplefolder from "../pictures/purplefolder.png";
import bin from "../pictures/bin.png";
import Clock from "../components/Clock";
import SingleNote from "../components/SingleNote";
import { useState, useEffect } from "react";

/*grabbing the state from localstorage and putting it into the variabe after converting from string to object  */
const noteFromLocalStorage = JSON.parse(localStorage.getItem("notes"));

function Note() {
  /*load the local storage with notes into the state */
  const [notes, setNotes] = useState(noteFromLocalStorage);

  /*Whenever the notes state changes, save the state into the local storage */
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  console.log(notes);
  function createNoteGreen() {
    setNotes([
      ...notes,
      { color: "white", backgroundcolor: "#4dcc31", key: nanoid() },
    ]);
  }
  function createNoteWhite() {
    setNotes([
      ...notes,
      { color: "black", backgroundcolor: "#ffffff", key: nanoid() },
    ]);
  }
  function createNoteOrange() {
    setNotes([
      ...notes,
      { color: "white", backgroundcolor: "#fe7600", key: nanoid() },
    ]);
  }
  function createNotePurple() {
    setNotes([
      ...notes,
      { color: "white", backgroundcolor: "#a456f0", key: nanoid() },
    ]);
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
      <img className="bin" src={bin} alt="" />

      {/*Here happens the actual rendering of the single notes*/}
      <div styles={styles} className="wrapper">
        {notes.map((item) => {
          return (
            <SingleNote
              backgroundcolor={item.backgroundcolor}
              color={item.color}
            ></SingleNote>
          );
        })}
      </div>
    </div>
  );
}

export default Note;
