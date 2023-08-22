import React, { useState, useEffect } from "react";
import Header from "../../components/Header/header";
import Navbar from "../../components/Navbar/navbar";
import Card from "../../components/Card/card";
import styles from "./rank.module.css";
import axios from "axios";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Rank() {
  const [currentRanking, setCurrentRanking] = useState("월간랭킹");
  const [cardData, setCardData] = useState([]);
  const [toggle, setToggle] = useState(false);
  const now = new Date();

  // 정렬 기준이 바뀔때마다 카드데이터 업데이트
  useEffect(() => {
    if (currentRanking == "월간랭킹") {
      axios.get("monthly_ranking").then((res) => setCardData(res.data));
    } else if (currentRanking == "주간랭킹") {
      axios.get("weekly_ranking").then((res) => setCardData(res.data));
    } else {
      axios.get("pictures_ranking").then((res) => setCardData(res.data));
    }
  }, [currentRanking]);

  // 토글 상태 변경
  const handleChangeToggleBtn = () => {
    setToggle((prev) => !prev);
  };

  // 현재 정렬기준 변경
  const handleChangeCurrentRanking = (data) => {
    setCurrentRanking(data);
    setToggle((prev) => !prev);
  };

  return (
    <div className={styles.rank}>
      <Header
        type={"rank"}
        title={currentRanking}
        text={
          currentRanking == "월간랭킹"
            ? `${now.getMonth() + 1}월 랭킹`
            : currentRanking == "주간랭킹"
            ? `${now.getMonth() + 1}월 ${Math.floor(
                now.getWeek() / (now.getMonth() + 1)
              )}째주 랭킹`
            : "누적랭킹을 확인하세요!"
        }
        buttons={[<AiFillCaretUp />, <AiFillCaretDown />]}
        toggle={toggle}
        handleChangeCurrentRanking={handleChangeCurrentRanking}
        handleBtnClick={handleChangeToggleBtn}
      ></Header>
      <div className={styles.rank_container}>
        <Swiper
          effect={"coverflow"}
          loop={true}
          centeredSlides={true}
          slidesPerView={1.5}
          loopadditionalslides={2}
          coverflowEffect={{
            slideShadows: false,
            rotate: 0,
            stretch: 190,
            depth: 10,
            scale: 0.8,
          }}
          modules={[EffectCoverflow]}
          className={styles.swiper}
        >
          {cardData.map((card, index) => (
            <SwiperSlide className={styles.card_container} key = {index}>
              <Card
                id={index}
                type={"RANK"}
                cardData={card}
                className={styles.card}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <Navbar active={"/rank"}></Navbar>
    </div>
  );
}


Date.prototype.getWeek = function (dowOffset) {
  dowOffset = typeof dowOffset == "number" ? dowOffset : 0;
  var newYear = new Date(this.getFullYear(), 0, 1);
  var day = newYear.getDay() - dowOffset;
  day = day >= 0 ? day : day + 7;
  var daynum =
    Math.floor(
      (this.getTime() -
        newYear.getTime() -
        (this.getTimezoneOffset() - newYear.getTimezoneOffset()) * 60000) /
        86400000
    ) + 1;
  var weeknum;
  if (day < 4) {
    weeknum = Math.floor((daynum + day - 1) / 7) + 1;
    if (weeknum > 52) {
      let nYear = new Date(this.getFullYear() + 1, 0, 1);
      let nday = nYear.getDay() - dowOffset;
      nday = nday >= 0 ? nday : nday + 7;
      weeknum = nday < 4 ? 1 : 53;
    }
  } else {
    weeknum = Math.floor((daynum + day - 1) / 7);
  }
  return weeknum;
};