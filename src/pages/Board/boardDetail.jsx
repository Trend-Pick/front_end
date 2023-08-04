import React,{useEffect,useState} from "react";
import styles from "./boardDetail.module.css"
import Header from "../../components/Header/header";
import axios from "axios";
import { Link,useParams,useLocation, redirect } from "react-router-dom";

function BoardDetail(){
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const idx = queryParams.get('idx');
    const [reply,setReply]=useState("")
    const [board, setBoard] = useState([{
        id: '',
        title: '',
        image: '',
        date: ''
    }]);
    const [replyList,setReplyList]=useState([{
        rno:"",
        reply:"",
        id:"",
        writer:"",
        Year:"",
        Month:"",
        day:"",
        hour:"",
        min:""
    }])
    useEffect(()=>{
        const Data = async () => {
            try {
              const response = await axios.get(`http://localhost:3001/boardList/${idx}`);
              setBoard(response.data);
            } catch (error) {
              console.error(error); 
            }
          };
          Data();
    },[idx])

    useEffect(()=>{
        
        const Data = async () => {
            try {
              const response = await axios.get(`http://localhost:3001/boardReply?rno=${idx}`);
              setReplyList(response.data)
            } catch (error) {
              console.error(error); 
            }
          };
          Data();
    },[idx])

    
    const send=async ()=>{
        const date = new Date()
        const updateReply={
            rno:idx,
            reply:reply,
            writer:sessionStorage.getItem("id"),
            Year:date.getFullYear(),
            Month:date.getMonth(),
            day:date.getDay(),
            hour:date.getHours(),
            min:date.getMinutes()
        }
        try {
            const response = await axios.post("http://localhost:3001/boardReply", updateReply);
            console.log(response.data);
            window.location.reload()
          } catch (error) {
            console.log(error);
          }
    }

    const replyChange=(e)=>{
        setReply(e.target.value)
    }

    const replyDelete=(e)=>{
        axios.delete(`http://localhost:3001/boardReply/${e}`)
        .then((response)=>{
            console.log(response.data)
            window.location.reload()
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    return(
        <div id={styles.wrapper}>
            <Header/>
            <div id={styles.wrapper2}>
                <div id={styles.boardDetail}>
                    <div id={styles.title}>
                        <div>{board.title}</div>   
                    </div>
                    <div id={styles.etc}>
                        <div id={styles.nick}>닉네임 {board.date}</div>
                        <div id={styles.edit}><Link to={`/boardEdit?id=${board.id}`}>수정</Link> | 삭제</div>
                    </div>
                    {board.image==null?null:<div id={styles.boardImage}><img src={board.image}></img></div>}
                    <div id={styles.content}>
                        <div>{board.content}</div>
                    </div>
                </div>
                <div id={styles.replyWrapper}> 
                    {replyList.map((item,idx)=>{
                        return(
                            <div id={styles.replyBox}>
                                <div id={styles.replyWriter}>{item.writer}</div>
                                <div id={styles.etc2}>
                                    <div id={styles.date}>{item.Year}년 {item.Month}월 {item.Year}일 {item.hour}:{item.min}</div>
                                    {sessionStorage.getItem("id")==item.writer?<div id={styles.delete} onClick={() => replyDelete(item.id)}>삭제</div>:<div id={styles.delete}></div>}
                                </div>
                                <div id={styles.reply}>{item.reply}</div>
                                
                            </div>
                        )
                    })}
                </div>
            </div>
            <div id={styles.writeReply}>
                <input id={styles.replyInput} onChange={replyChange} />
                <button type="button" id={styles.submit} onClick={send}><img id={styles.send} src="/img/send.png"/></button>
            </div>
        </div>
    )
}

export default BoardDetail;