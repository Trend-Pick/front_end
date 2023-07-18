import React from "react";
import styles from "./Header.module.css";
export default function Header({ title, summary, buttons }) {
  return (
    <header>
      <h1 className={styles.title}>{title}</h1>
      <h2 cn>{summary}</h2>
    </header>
  );
}
