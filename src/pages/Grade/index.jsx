import React, { useState, useEffect } from "react";
import styles from "./grade.module.css";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import Card from "../../components/Card";
import {
  voteLikeImg,
  voteDislikeImg,
  getGradeCard,
} from "../../apis/services/grade";
import { useCallback } from "react";

export default function Grade() {
  const [cardData, setCardData] = useState([]);

  // 사진 받아오는 함수
  const fetchData = useCallback(() => {
    getGradeCard().then((res) => {
      setCardData(res.data);
    });
  }, []);

  // 점수주기
  const handleGradeClick = (direction, id) => {
    if (direction === "up") {
      voteLikeImg(id);
    } else {
      voteDislikeImg(id);
    }
    fetchData();
  };

  useEffect(() => fetchData(), [fetchData]);

  return (
    <div className={styles.grade}>
      <Header type="grade" title="스타일 평가" text="스타일을 평가해보세요!" />
      <div className={styles.card_container}>
        {cardData.length === 0 ? (
          <Card type="NONE" />
        ) : (
          <Card
            type="GRADE"
            key={cardData.id}
            cardData={cardData}
            handleGradeClick={handleGradeClick}
          />
        )}
      </div>
      <Navbar active="/grade" />
    </div>
  );
}
