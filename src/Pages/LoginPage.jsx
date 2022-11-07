import React from "react";
import Login from "../components/Login/Login";
import styles from "./LoginPage.module.css";
import Logo from "../components/Logo";
import Clock from "../components/Clock";

function LoginPage() {
  return (
    <div className={styles.container} style={styles}>
      <Login />
      <Clock />
      <Logo />
    </div>
  );
}

export default LoginPage;
