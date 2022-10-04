import React from "react";
import { useEffect, useState } from "react";
import bin from "../pictures/bin.png";

function SingleNote({ color, backgroundcolor, text, date, deleteHandler, id }) {
  const styles = {
    backgroundColor: backgroundcolor,
    color: color,
  };

  function inputHandler() {}

  return (
    <div style={styles} className="note">
      <span>{text}</span>
      <div className="note-footer">
        <small>{date}</small>

        <img
          className="delete-icon"
          onClick={() => deleteHandler(id)}
          src={bin}
          alt=""
        />
      </div>
    </div>
  );
}

export default SingleNote;
