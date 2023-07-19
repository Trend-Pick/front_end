import React from "react";
import styles from "./header.module.css";

export default function Header({ type, title, text, buttons }) {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>{title}</h1>
      <h2 className={styles.text}>{text}</h2>
    </header>
  );
}
