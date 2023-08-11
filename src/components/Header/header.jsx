import React, { useEffect } from "react";
import styles from "./header.module.css";


// handleBtnClick props로 전달
export default function Header({ type, title, text, buttons, handleBtnClick }) {
  if (type == "grade") {
    return (
      <header className={styles.header_grade}>
        <h1 className={styles.title_grade}>{title}</h1>
        <p className={styles.text}>{text}</p>
      </header>
    );
  } else if (type == "rank") {
    return (
      <header className={styles.header_rank}>
        <h1 className={styles.title_rank} onClick={handleBtnClick}>
          {title}
          {buttons}
        </h1>
        <p className={styles.text}>{text}</p>
      </header>
    );
  } else if (type == "board") {
    return (
      <header className={styles.header_board}>
        <h1 className={styles.title_board}>{title}</h1>
        <h1 className={styles.icons_board} onClick={handleBtnClick}>{buttons}</h1>
      </header>
    );
  } else if (type == "profile") {
    return (
      <header className={styles.header_profile}>
        <h1 className={styles.icons_profile} onClick={handleBtnClick}>{buttons}</h1>
      </header>
    );
  }
}