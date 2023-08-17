import React from "react";
import styles from "./card.module.css";
import { FaHeart } from "react-icons/fa";
import { MdThumbUp, MdThumbDown } from "react-icons/md";

export default function Card(props) {

  const { type, handleGradeClick, cardData } = props;
  if (type == "GRADE") {
    return (
      <card className={styles.card_grade}>
        <img src={cardData.url} className={styles.grade_img}></img>
        <info className={styles.grade_btn}>
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
        </info>
      </card>
    );
  }
  
  
  
  else if (type == "RANK") {
    return (
      <card className={styles.card_rank}>
        {/* be에서 받아오기 */}
        <img
          src={require("../../img/bg1.jpg")}
          className={styles.img}
        ></img>
        <div className={styles.profile}>
          <h1>1</h1>
          <img
            src={require("../../img/bg1.jpg")}
            className={styles.profile_img}
          />
          <div className={styles.profile_info}>
            <h3>닉네임</h3>
            <div className={styles.profile_text}>
              <FaHeart className={styles.profile_icon} />
              <p>467</p>
            </div>
          </div>
        </div>
      </card>
    );
  }
}
