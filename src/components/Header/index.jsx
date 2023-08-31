import React from "react";
import styles from "./header.module.css";
import { useNavigate } from "react-router-dom";

export default function Header({
  type,
  title,
  text,
  buttons,
  toggle,
  handleChangeCurrentRanking,
  handleBtnClick,
}) {
  const location = useNavigate();

  if (type === "grade") {
    return (
      <header className={styles.header_grade}>
        <h1 className={styles.title_grade}>{title}</h1>
        <p className={styles.text}>{text}</p>
      </header>
    );
  } else if (type === "rank") {
    if (toggle) {
      return (
        <header
          className={styles.header_rank}
          style={{ height: toggle ? "150px" : null }}
        >
          <div className={styles.container_toggle_rank}>
            <h1
              className={styles.title_rank}
              onClick={() => handleChangeCurrentRanking("Monthly")}
            >
              월간랭킹
            </h1>
            <h1
              className={styles.title_rank}
              onClick={() => handleChangeCurrentRanking("Weekly")}
            >
              주간랭킹
            </h1>
            <h1
              className={styles.title_rank}
              onClick={() => handleChangeCurrentRanking("All")}
            >
              누적랭킹
            </h1>
          </div>
          <h1 className={styles.icons_rank} onClick={handleBtnClick}>
            {buttons[0]}
          </h1>
        </header>
      );
    } else {
      return (
        <header
          className={styles.header_rank}
          style={{ height: toggle ? "120px" : null }}
        >
          <div className={styles.container_rank}>
            <h1 className={styles.title_rank}>{title}</h1>
            <p className={styles.text}>{text}</p>
          </div>
          <h1 className={styles.title_rank} onClick={handleBtnClick}>
            {buttons[1]}
          </h1>
        </header>
      );
    }
  } else if (type === "upload") {
    return (
      <header className={styles.header_upload}>
        <h1 className={styles.title_upload}>{title}</h1>
      </header>
    );
  } else if (type === "board") {
    return (
      <header className={styles.header_board}>
        <h1 className={styles.title_board}>{title}</h1>
        <h1 className={styles.icons_board} onClick={handleBtnClick}>
          {buttons}
        </h1>
      </header>
    );
  } else if (type === "profile") {
    return (
      <header className={styles.header_profile}>
        <h1 className={styles.title_profile}>마이페이지</h1>
        <h1 className={styles.icons_profile} onClick={handleBtnClick}>
          {buttons}
        </h1>
      </header>
    );
  } else if (type === "board_detail") {
    return (
      <header className={styles.header_board_detail}>
        <h1 className={styles.icons_board_detail} onClick={handleBtnClick}>
          {buttons}
        </h1>
      </header>
    );
  } else if (type === "board_write") {
    return (
      <header className={styles.header_board_write}>
        <h1
          className={styles.icons_board_write}
          onClick={() => {
            location(-1);
          }}
        >
          {buttons[0]}
        </h1>
        <h1 className={styles.icons_board_write} onClick={handleBtnClick}>
          {buttons[1]}
        </h1>
      </header>
    );
  } else if (type === "register") {
    return (
      <header className={styles.header_register}>
        <h1 className={styles.title_register}>회원가입</h1>
      </header>
    );
  }
}
