import React from "react";
import styles from "./Button.module.css";

function Button({text, onClick}) {
  
  return (
    <>
    <button className={styles.Button__Button} onClick={onClick}>
      {text}
    </button>
    </>
  );
}

export default Button;
