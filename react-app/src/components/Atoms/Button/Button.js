import React from "react";
import styles from "./Button.module.css";

function Button({text, onClick}) {
  
  return (
    <div className={styles.Button__container}>
    <button className={styles.Button__Button} onClick={onClick}>
      {text}
    </button>
    </div>
  );
}

export default Button;
