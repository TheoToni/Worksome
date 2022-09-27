import React from "react";
import styles from "./SingleNote.module.css";

function SingleNote(props) {
  const styles = {
    backgroundColor: props.backgroundcolor,
    color: props.color,
  };

  return (
    <div>
      <textarea
        style={styles}
        className="singleNote"
        name="Notes"
        id=""
        cols="10"
        rows="5"
      ></textarea>
    </div>
  );
}

export default SingleNote;
