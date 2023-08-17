import React, { useState, useRef } from "react";
import Header from "../../components/Header/header";
import Navbar from "../../components/Navbar/navbar";
import { AiFillCaretDown } from "react-icons/ai";
import styles from "./rank.module.css";


import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCreative, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Card from "../../components/Card/card";

export default function Rank() {
  const [toggleRanking, setToggleRanking] = useState("MONTH");
  const handleChangeToggleBtn = () => {
    console.log("ㅇㅇ바꿀게")
  }
  const cardData = [
    // 백엔드로부터 데이터 받아오기
    {
      imgUrl: require("../../img/KakaoTalk_20210825_045216360.jpg"),
      grade: 0,
    },
    {
      imgUrl: require("../../img/마멜.jpg"),
      grade: 0,
    },
    {
      imgUrl: require("../../img/IMG_0019.jpg"),
      grade: 0,
    },
  ];

  return (
    <div className={styles.rank}>
      <Header
        type={"rank"}
        title={"월간랭킹"}
        text={`${"7"}월 첫째주 랭킹`}
        buttons={<AiFillCaretDown />}
        handleBtnClick={handleChangeToggleBtn}
      ></Header>
      <div className={styles.rank_container}>
        <Swiper
          effect={"coverflow"}
          loop={true}
          centeredSlides={true}
          slidesPerView={1.5}
          loopAdditionalSlides={2}
          coverflowEffect={{
            slideShadows:false,
            rotate: 0,
            stretch: 190,
            depth: 10,
            scale: 0.8,
          }}
          modules={[EffectCoverflow]}
          className={styles.swiper}
        >
          {cardData.map((card) => (
            <SwiperSlide className={styles.card_container}>
              <Card
                type={"RANK"}
                imgUrl={card.imgUrl}
                className={styles.card}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <Navbar></Navbar>
    </div>
  );
}
