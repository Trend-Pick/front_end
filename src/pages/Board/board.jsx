import React from "react";
import Header from "../../components/Header/header";
import Navbar from "../../components/Navbar/navbar";

export default function Board() {
  return (
    <board>
      <Header
        type={"board"}
        title={"자유게시판"}
      ></Header>
      <div>자유게시판</div>
      <Navbar></Navbar>
    </board>
  );
}
