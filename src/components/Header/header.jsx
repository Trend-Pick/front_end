import React from "react";
import styles from "./header.module.css";
<<<<<<< HEAD
import { useNavigate } from "react-router-dom";

// handleBtnClick props로 전달
export default function Header({ type, title, text, buttons, handleBtnClick }) {
  const location = useNavigate();
  if (type == "grade" || type == "upload") {
=======

// handleBtnClick props로 전달
export default function Header({ type, title, text, buttons, handleBtnClick }) {
  // if (type == "grade" || type == "upload") {
  if (type == "grade") {
>>>>>>> 0a86f8e8356fc2c0bdcad0a81b9308d114e1789f
    return (
      <header className={styles.header_grade}>
        <h1 className={styles.title_grade}>{title}</h1>
        <p className={styles.text}>{text}</p>
      </header>
    );
  } else if (type == "rank") {
    return (
      <header className={styles.header_rank}>
        <div className={styles.container_rank}>
          <h1 className={styles.title_rank}>{title}</h1>
          <p className={styles.text}>{text}</p>
        </div>
        <h1 className={styles.title_rank} onClick={handleBtnClick}>
          {buttons}
        </h1>
      </header>
    );
  } else if (type == "upload") {
    return (
      <header className={styles.header_upload}>
        <h1 className={styles.title_upload}>{title}</h1>
      </header>
    );
  } else if (type == "board") {
    return (
      <header className={styles.header_board}>
        <h1 className={styles.title_board}>{title}</h1>
        <h1 className={styles.icons_board} onClick={handleBtnClick}>
          {buttons}
        </h1>
      </header>
    );
  } else if (type == "profile") {
    return (
      <header className={styles.header_profile}>
        <h1 className={styles.icons_profile} onClick={handleBtnClick}>
          {buttons}
        </h1>
      </header>
    );
  } else if (type == "board_detail") {
    return (
      <header className={styles.header_board_detail}>
        <h1 className={styles.icons_board_detail} onClick={handleBtnClick}>
          {buttons}
        </h1>
      </header>
    );
  } else if (type == "board_write") {
    return (
      <header className={styles.header_board_write}>
<<<<<<< HEAD
        <h1 className={styles.icons_board_write} onClick={()=>{location(-1)}}>{buttons[0]}</h1>
        <h1 className={styles.icons_board_write} onClick={handleBtnClick}>{buttons[1]}</h1>
=======
        <h1 className={styles.icons_board_write} onClick={handleBtnClick}>
          {buttons[0]}
        </h1>
        <h1 className={styles.icons_board_write} onClick={handleBtnClick}>
          {buttons[1]}
        </h1>
>>>>>>> 0a86f8e8356fc2c0bdcad0a81b9308d114e1789f
      </header>
    );
  }
}
