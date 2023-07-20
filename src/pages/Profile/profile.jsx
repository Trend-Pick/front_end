import React from "react";
import Header from "../../components/Header/header";
import Navbar from "../../components/Navbar/navbar";

export default function Profile() {
  return (
    <profile>
      <Header
        type={"profile"}
      ></Header>
      <div>프로필</div>
      <Navbar></Navbar>
    </profile>
  );
}
