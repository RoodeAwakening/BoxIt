import React from "react";
import styles from "./LoginPageButton.module.css";

function LoginPageButton({text, onClick}) {
  
  return (
    <>
    <button className={styles.LoginPageButton__Button} onClick={onClick}>
      {text}
    </button>
    </>
  );
}

export default LoginPageButton;
