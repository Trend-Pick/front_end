import React from "react";
import styles from "./grade.module.css";
import Header from "../../components/Header/header";
import Navbar from "../../components/Navbar/navbar";

export default function Grade() {
  return (
    <grade className={styles.grade}>
      <Header
        type={"grade"}
        title={"스타일 평가"}
        text={"스타일을 평가해보세요!"}
      ></Header>
      <div>카드</div>
      <Navbar></Navbar>
    </grade>
  );
}
