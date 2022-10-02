import React from "react";
import { nanoid } from "nanoid";
import styles from "./Note.module.css";
import Logo from "../components/Logo";
import greenfolder from "../pictures/greenfolder.png";
import orangefolder from "../pictures/orangefolder.png";
import whitefolder from "../pictures/whitefolder.png";
import purplefolder from "../pictures/purplefolder.png";
import AddNote from "../components/AddNote";
import Clock from "../components/Clock";
import SingleNote from "../components/SingleNote";
import { useState, useEffect } from "react";
import Search from "../components/Search";

function Note() {
  const [notes, setNotes] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [backgroundColor, setbackgroundColor] = useState("#4dcc31");
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("react-notes-app-data"));
    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("react-notes-app-data", JSON.stringify(notes));
  }, [notes]);

  function addNote(text) {
    const date = new Date();
    const newNote = {
      text: text,
      date: date.toLocaleDateString(),
      id: nanoid(),
      backgroundcolor: backgroundColor,
      color: color,
      key: nanoid(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  }

  const deleteNote = (id) => {
    const newNotes = notes.filter((notes) => notes.id !== id);

    setNotes(newNotes);
  };

  function changeColor(event) {
    switch (event) {
      case "green":
        console.log("green");
        setbackgroundColor("#4dcc31");
        setColor("#ffffff");
        break;
      case "orange":
        console.log("orange");
        setbackgroundColor("#fe7600");
        setColor("#ffffff");
        break;
      case "purple":
        console.log("purple");
        setbackgroundColor("#a456f0");
        setColor("#ffffff");
        break;
      case "white":
        console.log("white");
        setbackgroundColor("#ffffff");
        setColor("#000000");
        break;
      default:
        break;
    }
    console.log(backgroundColor);
  }

  const filteredNotes = notes.filter((note) =>
    note.text.toLowerCase().includes(searchText)
  );

  return (
    <div styles={styles}>
      <Logo></Logo>
      <Clock></Clock>
      <h1>
        Not<span className="titlespan">es</span>
      </h1>
      <Search handleSearchNote={setSearchText}></Search>
      <img
        src={greenfolder}
        name="green"
        onClick={(event) => changeColor(event.target.name)}
      />
      <img
        src={orangefolder}
        alt=""
        name="orange"
        onClick={(event) => changeColor(event.target.name)}
      />
      <img
        src={whitefolder}
        alt=""
        name="white"
        onClick={(event) => changeColor(event.target.name)}
      />
      <img
        src={purplefolder}
        alt=""
        name="purple"
        onClick={(event) => changeColor(event.target.name)}
      />

      <div styles={styles} className="wrapper">
        {filteredNotes.map((item) => {
          return (
            <SingleNote
              id={item.id}
              backgroundcolor={item.backgroundcolor}
              color={item.color}
              text={item.text}
              date={item.date}
              deleteHandler={deleteNote}
              key={item.id}
            ></SingleNote>
          );
        })}
        <AddNote
          backgroundcolor={backgroundColor}
          handleAddNote={addNote}
          color={color}
        ></AddNote>
      </div>
    </div>
  );
}

export default Note;
