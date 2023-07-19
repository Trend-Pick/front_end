import React from "react";
import styles from "./header.module.css";

export default function Header({ type, title, text, buttons }) {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>
        {title}
        {type === "lank" ? buttons : null}
      </h1>
      <p className={styles.text}>{text}</p>
    </header>
  );
}
