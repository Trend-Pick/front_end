import React,{useState,useEffect} from "react";
import Header from "../../components/Header/header";
import Navbar from "../../components/Navbar/navbar";
import styles from './board.module.css'
import axios from "axios";

export default function Board() {
  const [boardList,setBoardList]=useState([])
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(()=>{
    axios.get("http://localhost:3001/boardList")
    .then((response)=>{
      console.log(response.data)
      setBoardList(response.data)
    })
  },[])

  useEffect(() => {
    // 컴포넌트가 마운트될 때와 업데이트될 때마다 현재 시간을 업데이트합니다.
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 100000); // 1초마다 업데이트

    // 컴포넌트가 언마운트될 때 타이머를 해제합니다.
    return () => clearInterval(timer);
  }, []);



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
              {item.image==null?
              <div>
                <div id={styles.title1}>{item.roomName}</div>
                <span id={styles.date1}>닉네임/{
                  Math.floor((currentTime-item.date)/(1000*60))<60?Math.floor((currentTime-item.date)/(1000*60))+"분전":
                  (Math.floor((currentTime-item.date)/(1000*60))>=60?Math.floor((currentTime-item.date)/(1000*60*60))+"시간전": Math.floor((currentTime-item.date)/(1000*60*60*1024))+"일전")
                  }
                </span>
                <div id={styles.content1}>{item.content.length>45?item.content.slice(0, 45) + "...":item.content}</div>
              </div>
              :
              <div id={styles.wrapper2}>
                <div id={styles.div1}>
                  <div id={styles.title1}>{item.roomName}</div>
                  <span id={styles.date1}>닉네임/{
                  Math.floor((currentTime-item.date)/(1000*60))<60?Math.floor((currentTime-item.date)/(1000*60))+"분전":
                  Math.floor((currentTime-item.date)/(1000*60))>=60?Math.floor((currentTime-item.date)/(1000*60*60)):null
                  }
                </span>
                  <div id={styles.content1}>{item.content.length>20?item.content.slice(0, 20) + "...":item.content}</div>
                </div>
                <div id={styles.div2}>
                  <img src={item.image}></img>
                </div>
              </div>
              }
              
            </div>
          )
        })}
      </div>
      <Navbar></Navbar>
    </div>
  );
}
