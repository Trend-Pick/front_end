import React, { useState, useRef, useEffect } from "react";
import styles from "./grade.module.css";
import Header from "../../components/Header/header";
import Navbar from "../../components/Navbar/navbar";
import Card from "../../components/Card/card";
import axios from "axios";

export default function Grade() {
  const [cardData, setCardData] = useState([]);

  // 사진 받아오는 함수
  const fetchData = () => {
    axios
      .get("/vote")
      .then((res) => {
        setCardData(res.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setCardData([]);
      });
  };

  // 점수주기
  const handleGradeClick = (direction, id) => {
    if (direction == "up") {
      axios.post(`/vote/like/${id}`).then((res) => console.log(res));
    } else {
      axios.post(`/vote/dislike/${id}`).then((res) => console.log(res));
    }
    fetchData();
  };

  useEffect(() => fetchData(), []);

  return (
    <div className={styles.grade}>
      <Header
        type={"grade"}
        title={"스타일 평가"}
        text={"스타일을 평가해보세요!"}
      ></Header>
      <div className={styles.card_container}>
        {cardData === [] ? (
          <Card type={"NONE"}></Card>
        ) : (
          <Card
            type={"GRADE"}
            key={cardData.id}
            cardData={cardData}
            handleGradeClick={handleGradeClick}
          ></Card>
        )}
      </div>
      <Navbar active={"/grade"}></Navbar>
    </div>
  );
}
