import React from "react";
import Header from "../../components/Header/header";
import Navbar from "../../components/Navbar/navbar";

export default function Grade() {
  return (
    <div>
      <Header
        type={"grade"}
        text={"스타일 평가"}
        summary={"스타일을 평가해보세요"}
      ></Header>
      <Navbar></Navbar>
    </div>
  );
}
