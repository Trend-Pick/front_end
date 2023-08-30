import React from "react";
import styles from "./post.module.css";
import publishedAtCalc from "../../apis/utils/publishedAtCalc";
import { Link } from "react-router-dom";

export default function Post({ postData, nickname }) {
  if (postData.postUrl === null) {
    return (
      <Link
        style={{ textDecoration: "none" }}
        to={"/boardDetail?idx=" + `${postData.id}`}
      >
        <div className={styles.container}>
          <div className={styles.title}>{postData.title}</div>
          <p className={styles.time}>
            {nickname}/{publishedAtCalc(postData.time)}
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
              {nickname}/{publishedAtCalc(postData.time, postData.title)}
            </p>
            <div className={styles.text}>{postData.content}</div>
          </div>
          <img src={postData.postUrl} className={styles.img}></img>
        </div>
      </Link>
    );
  }
}
