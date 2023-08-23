import React from "react";
import styles from "./card.module.css";
import { FaHeart, FaTrash } from "react-icons/fa";
import { MdThumbUp, MdThumbDown } from "react-icons/md";
import {
  TbRosetteNumber1,
  TbRosetteNumber2,
  TbRosetteNumber3,
} from "react-icons/tb";

export default function Card(props) {
  const { type, handleGradeClick, handleDeleteGallery, cardData, id } = props;
  if (type == "GRADE") {
    return (
      <div className={styles.grade}>
        <img src={cardData.url} className={styles.card_img}></img>
        <div className={styles.grade_btn}>
          <button
            className={styles.minus_btn}
            onClick={() => handleGradeClick("down", cardData.id)}
          >
            <MdThumbDown />
          </button>
          <button
            className={styles.plus_btn}
            onClick={() => handleGradeClick("up", cardData.id)}
          >
            <MdThumbUp />
          </button>
        </div>
      </div>
    );
  } else if (type == "RANK") {
    return (
      <div className={styles.rank}>
        <img src={cardData.imgUrl} className={styles.card_img}></img>
        <div className={styles.profile}>
          <h1 className={styles.profile_rank}>
            {id == 0 ? (
              <TbRosetteNumber1 color="#D5A11E" />
            ) : id == 1 ? (
              <TbRosetteNumber2 color="#A3A3A3" />
            ) : (
              <TbRosetteNumber3 color="#CD7F32" />
            )}
          </h1>
          <img src={cardData.member_img} className={styles.profile_img} />
          <div className={styles.profile_info}>
            <h3>{cardData.nickname}</h3>
            <div className={styles.profile_text}>
              <FaHeart className={styles.profile_heart_icon} />
              <p>{cardData.like}</p>
            </div>
          </div>
        </div>
      </div>
    );
  } else if (type == "MYPAGE") {
    return (
      <div className={styles.modal}>
        <img src={cardData.picture_Url} className={styles.card_img}></img>
        <div className={styles.profile_modal}>
          <img src={cardData.profile_Img} className={styles.profile_img} />
          <div className={styles.profile_info}>
            <h3>{cardData.nickname}</h3>
            <div className={styles.profile_text}>
              <FaHeart className={styles.profile_heart_icon} />
              <p>{cardData.like}</p>
            </div>
          </div>
          <FaTrash
            className={styles.profile_trash_icon}
            onClick={() => handleDeleteGallery()}
          />
        </div>
      </div>
    );
  } else if (type == "NONE") {
    return (
      <div className={styles.none}>
        <p>더 이상 평가할 사진이 없네요!</p>
        <p>사진이 등록될때까지 기다려 주세요</p>
        <p>☺️</p>
      </div>
    );
  }
}
