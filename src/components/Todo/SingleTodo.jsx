import React from "react";
import styles from "./SingleTodo.module.css";
import pin from "../../pictures/pin.svg";
import Draggable from "react-draggable";
function SingleTodo(props) {
  return (
    <Draggable>
      <div className={styles.singleTodoContainer}>
        <div className={styles.singleContainerheader}></div>
        <div className={styles.singleContainerContent}>
          <textarea name="" id="" cols="20" rows="8"></textarea>
          <img width="30px" src={pin} alt="" />
        </div>
        <div className={styles.singleContainerFooter}></div>
      </div>
    </Draggable>
  );
}

export default SingleTodo;
