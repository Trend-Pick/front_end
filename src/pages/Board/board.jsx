import React,{useState,useEffect} from "react";
import Header from "../../components/Header/header";
import Navbar from "../../components/Navbar/navbar";
import styles from './board.module.css'
import axios from "axios";

export default function Board() {
  const [boardList,setBoardList]=useState([])

  useEffect(()=>{
    axios.get("http://localhost:3001/boardList")
    .then((response)=>{
      console.log(response.data)
      setBoardList(response.data)
    })
  },[])
  return (
    <div className={styles.board}>
      <Header
        id={styles.header}
        type={"board"}
        title={"자유게시판"}
      ></Header>
      <div id={styles.wrapper}>
        {boardList.map((item)=>{
          return(
            <div id={styles.boardList} key={item.id}>
              <div id={styles.title}>{item.roomName}</div>
              <span id={styles.date}>닉네임/현재시간-작성시간</span>
              <div id={styles.content}>{item.content.length>45?item.content.slice(0, 45) + "...":null}</div>
            </div>
          )
        })}
      </div>
      <Navbar></Navbar>
    </div>
  );
}
