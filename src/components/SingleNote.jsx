import React from "react";
import styles from "./SingleNote.module.css";
import { useEffect } from "react";

const singleNoteFromLocalStorage = JSON.parse(
  localStorage.getItem("singleNote")
);

function SingleNote(props) {
  const [inputData, setInputData] = React.useState(singleNoteFromLocalStorage);

  useEffect(() => {
    localStorage.setItem("singleNote", JSON.stringify(inputData));
  }, [inputData]);

  function inputHandler(event) {
    setInputData((value) => {
      return {
        ...value,
        text: event.target.value,
      };
    });
    console.log(inputData);
  }

  const styles = {
    backgroundColor: props.backgroundcolor,
    color: props.color,
  };

  return (
    <div>
      <textarea
        onChange={inputHandler}
        value={inputData.text}
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
