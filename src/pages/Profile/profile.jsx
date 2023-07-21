import React from "react";
import Header from "../../components/Header/header";
import Navbar from "../../components/Navbar/navbar";
import styles from './profile.module.css'

export default function Profile() {
  return (
    <profile className={styles.profile}>
      <Header
        type={"profile"}
      ></Header>
      <div>프로필</div>
      <Navbar></Navbar>
    </profile>
  );
}
