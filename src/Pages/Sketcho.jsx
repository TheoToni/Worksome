import React from "react";
import styles from "./Sketcho.module.css";
import Clock from "../components/Clock";
import Logo from "../components/Logo";

function Sketcho() {
  return (
    <div style={styles}>
      <Clock></Clock>
      <Logo></Logo>
      <h1>
        Ske<span className="titlespan2">tcho</span>
      </h1>
    </div>
  );
}

export default Sketcho;
