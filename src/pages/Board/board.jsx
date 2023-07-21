import React from "react";
import Header from "../../components/Header/header";
import Navbar from "../../components/Navbar/navbar";
import styles from './board.module.css'

export default function Board() {
  return (
    <boar className={styles.board}d>
      <Header
        type={"board"}
        title={"자유게시판"}
      ></Header>
      <div>자유게시판</div>
      <Navbar></Navbar>
    </boar>
  );
}
