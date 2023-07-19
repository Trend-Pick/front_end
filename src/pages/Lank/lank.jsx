import React from "react";
import Header from "../../components/Header/header";
import Navbar from "../../components/Navbar/navbar";
import { AiFillCaretDown } from "react-icons/ai";
import styles from "./lank.module.css";

export default function Lank() {
  return (
    <lank className={styles.lank}>
      <Header
        type={"lank"}
        title={"월간랭킹"}
        text={`${"7"}월 첫째주 랭킹`}
        buttons={<AiFillCaretDown />}
      ></Header>
      <div>랭킹</div>
      <Navbar></Navbar>
    </lank>
  );
}
