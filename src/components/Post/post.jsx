import React from "react";
import styles from "./post.module.css";
import { Link } from "react-router-dom";

export default function Post({ postData, nickname }) {
  if (postData.postUrl == null) {
    return (
      <Link
        style={{ textDecoration: "none" }}
        to={"/boardDetail?idx=" + `${postData.id}`}
      >
        <div className={styles.container}>
          <div className={styles.title}>{postData.title}</div>
          <p className={styles.time}>
            {nickname}/{postData.time}
            {/* {publishedAtCalc(postData.time)} */}
          </p>
          <div className={styles.text}>{postData.content}</div>
        </div>
      </Link>
    );
  } else {
    return (
      <Link
        style={{ textDecoration: "none" }}
        to={"/boardDetail?idx=" + `${postData.id}`}
      >
        <div className={styles.container_withImg}>
          <div className={styles.config}>
            <div className={styles.title}>{postData.title}</div>
            <p className={styles.time}>
              {nickname}/{postData.time}
            </p>
            <div className={styles.text}>{postData.content}</div>
          </div>
          <img
            src={require("../../img/blank-profile.jpg")}
            className={styles.img}
          ></img>
        </div>
      </Link>
    );
  }
}

function publishedAtCalc(n) {
  let current = new Date();
  let prev = new Date(n);
  let time = (current.getTime() - prev.getTime()) / 1000;
  if (time < 60) {
    // 60초 = 1분 1분보다 작다면 초전으로 표기
    return `${time}초전`;
  } else if (time < 360) {
    // 360초  = 60분 = 1시간 1시간보다 작다면 분전으로 표기
    return `${time / 60}분전`;
  } else if (time < 86400) {
    // 86,400초 = 1440분 = 24시간 = 1일 1일보다 작다면 시간전으로 표기
    return `${(time / 60) * 60}시간전`;
  } else if (time < 2419200 / 4) {
    //  = 28일보다 작다면 개월전으로 표기
    return `${Math.floor(time / (60 * 60 * 24))}일전`;
  } else if (time < 2419200) {
    return `${Math.floor(time / (60 * 60 * 24 * 7))}주전`;
  } else {
    return `${Math.floor(time / (60 * 60 * 24 * 28))}개월전`;
  }
}
