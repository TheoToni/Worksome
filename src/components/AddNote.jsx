import React from "react";
import { useState } from "react";

function AddNote({ handleAddNote, backgroundcolor, color }) {
  const [noteText, setNoteText] = useState("");
  const characterLimit = 200;

  function InputHandler(event) {
    if (characterLimit - event.target.value.length >= 0) {
      setNoteText(event.target.value);
    }
  }

  function handleSaveClick() {
    if (noteText.trim().length > 0) {
      handleAddNote(noteText);
      setNoteText("");
    }
  }

  const styles = {
    backgroundColor: backgroundcolor,
  };
  const areaStyles = {
    color: color,
  };
  return (
    <div style={styles} className="note new">
      <textarea
        style={areaStyles}
        cols="10"
        rows="8"
        value={noteText}
        placeholder="Type to add a note..."
        onChange={InputHandler}
      ></textarea>
      <div style={areaStyles} className="note-footer">
        <small>{characterLimit - noteText.length} Remaining</small>
        <button onClick={handleSaveClick} className="save">
          Save
        </button>
      </div>
    </div>
  );
}

export default AddNote;
