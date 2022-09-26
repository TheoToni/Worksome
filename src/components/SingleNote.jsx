import React from "react";
import styles from "./SingleNote.module.css";
import Draggable from "react-draggable";

function SingleNote() {
  return (
    <Draggable>
      <div styles={styles}>
        <textarea
          className="singleNote"
          name="Notes"
          id=""
          cols="30"
          rows="10"
        ></textarea>
      </div>
    </Draggable>
  );
}

export default SingleNote;
