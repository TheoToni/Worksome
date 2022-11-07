import React from "react";
import styles from "./Login.module.css";

function Login() {
  return (
    <div className={styles.formContainer} style={styles}>
      <span>Login and find out</span>
      <form>
        <input type="email" placeholder="email"></input>
        <input type="password" placeholder="password"></input>
        <button>Sign in</button>
      </form>
      <small>Not a member yet? Sign Up</small>
    </div>
  );
}

export default Login;
