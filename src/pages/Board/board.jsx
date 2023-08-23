import React, { useState, useEffect } from "react";
import Header from "../../components/Header/header";
import Navbar from "../../components/Navbar/navbar";
import styles from "./board.module.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { FiEdit } from "react-icons/fi";

export default function Board() {
  const [boardList, setBoardList] = useState([]);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    axios.get("/post_list")
      .then((response) => {
      console.log(response.data);
      setBoardList(response.data);
    });
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 100000);

    return () => clearInterval(timer);
  }, []);

  const goWrite=()=>{
    window.location.href="/BoardWrite"
  }

  const time=(e)=>{
    const timeDifference = currentTime - new Date(e.postTime).getTime();
const minutesDifference = Math.floor(timeDifference / (1000 * 60));
const hoursDifference = Math.floor(timeDifference / (1000 * 60 * 60));
const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

if(minutesDifference<1){
  return("방금전")
}else if (minutesDifference < 60) {
  return(`${minutesDifference}분전`);
} else if (hoursDifference < 24) {
  return(`${hoursDifference}시간전`);
} else {
  return(`${daysDifference}일전`);
}
  }
  return (
    <div className={styles.board}>
      <Header
        type={"board"}
        title={"자유게시판"}
        handleBtnClick={goWrite}
        buttons={<FiEdit />}
      ></Header>
      <div id={styles.wrapper}>
        {boardList.map((item,idx) => {
          return (
            <div id={styles.boardList} key={idx}>
              {item.postImgUrl == null ? (
                <div>
                  <Link
                    to={"/boardDetail?idx=" + `${item.id}`}
                    id={styles.Link}
                  >
                    <div id={styles.title}>{item.title}</div>
                  </Link>
                  <span id={styles.date1}>
                    {item.user_nickname}/{time(item)}
                  </span>
                  <div id={styles.content1}>
                    {item.content.length > 45
                      ? item.content.slice(0, 45) + "..."
                      : item.content}
                  </div>
                </div>
              ) : (
                <div id={styles.wrapper2}>
                  <div id={styles.div1}>
                    <Link
                      to={"/boardDetail?idx=" + `${item.id}`}
                      id={styles.Link}
                    >
                      <div id={styles.title}>{item.title}</div>
                    </Link>
                    <span id={styles.date1}>
                      {item.user_nickname}/{time(item)}
                    </span>
                    <div id={styles.content1}>
                      {item.content.length > 20
                        ? item.content.slice(0, 20) + "..."
                        : item.content}
                    </div>
                  </div>
                  <div id={styles.div2}>
                    <img src={item.postImgUrl}></img>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
      <Navbar id={styles.nav} active={"/board"}></Navbar>
    </div>
  );
}
