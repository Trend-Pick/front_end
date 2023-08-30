import React,{useEffect,useState} from "react";
import styles from "./boardDetail.module.css"
import Header from "../../components/Header/header";
import axios from "axios";
import { Link,useParams,useLocation, redirect,useNavigate } from "react-router-dom";
import {FiArrowLeft} from "react-icons/fi";


function BoardDetail(){
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const idx = queryParams.get('idx');
    const [reply,setReply]=useState("")
    const [board, setBoard] = useState([{}]);
    const [replyList,setReplyList]=useState([{}])
    const navigate = useNavigate();
    
    const [counter, setCounter] = useState(true);
    useEffect(()=>{
        const Data = async () => {
            try {
              const response = await axios.get(`/post/${idx}`);
              console.log(response)
              setBoard(response.data);

              setReplyList(response.data.commentList)
            } catch (error) {
                console.error(error); 
            }
          };
          Data();
    },[counter])


    
    const send=async ()=>{
        const updateReply={
            content:reply
        }
        try {
            const response = await axios.post(`/create/${idx}/comment`,updateReply);
        
            setCounter(!counter)
            setReply("")
          } catch (error) {
            console.log(error);
          }
    }

    const replyChange=(e)=>{
        setReply(e.target.value)
    }

    const boardDelete=()=>{
        const Delete = window.confirm('삭제 하시겠습니까?');
        
        if(Delete){
            axios.delete(`/delete_post/${idx}`)
        .then((response)=>{
            console.log(response)
            if(response.statusText=="OK"){
                alert("삭제되었습니다.")
                window.location.href="/board"
            }
            else{
                alert("본인이 쓴 게시물이 아닙니다.")
                window.location.reload()
            }
        })
        .catch((err)=>{
            alert("본인이 쓴 게시물이 아닙니다.")
            console.log(err)
        })
        }
        else{
            return
        }
    }



    const replyDelete=(e)=>{
        axios.delete(`/delete_comment/${e}`)
        .then((response)=>{
            console.log(response)
            if(response.data=="ok"){
                setCounter(!counter)
            }
            else if(response.data==''){
                alert("본이 댓글만 삭제 가능합니다.")
            }
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    const back=()=>{
        navigate(-1)
    }

    const Enters=(e)=>{
        if(e.key=='Enter'){
            send()
        }
    }
    return(
        <div id={styles.wrapper}>
                  <Header type={"board_detail"} id={styles.dHeaders} buttons={<FiArrowLeft/>} handleBtnClick={back}></Header>
            <div id={styles.wrapper2}>
                <div id={styles.boardDetail}>
                    <div id={styles.title}>
                        <div>{board.title}</div>   
                    </div>
                    <div id={styles.etc}>
                        {new Date(board.time).getFullYear()+new Date(board.time).getMonth()+new Date(board.time).getDay()+new Date(board.time).getHours()+new Date(board.time).getMinutes()+new Date(board.time).getSeconds()
                        ===new Date(board.updateTime).getFullYear()+new Date(board.updateTime).getMonth()+new Date(board.updateTime).getDay()+new Date(board.updateTime).getHours()+new Date(board.updateTime).getMinutes()+new Date(board.updateTime).getSeconds()?
                        <div id={styles.nick}>{board.user_nickname} {new Date(board.time).getFullYear()}년 {new Date(board.time).getMonth()}월 {new Date(board.time).getDay()}일 {new Date(board.time).getHours()}시</div>:
                        <div id={styles.nick}>{board.user_nickname} {new Date(board.updateTime).getFullYear()}년 {new Date(board.updateTime).getMonth()}월 {new Date(board.updateTime).getDay()}일 {new Date(board.updateTime).getHours()}시 (수정됨)</div>
                        }
                        {board.user_id===sessionStorage.getItem("id")?<div id={styles.edit} ><Link to={`/boardEdit?id=${idx}`} id={styles.boardEditBtn}>수정</Link> | <div onClick={boardDelete}>삭제</div></div>:null}
                        
                    </div>
                    {board.postImgUrl==null?null:<div id={styles.boardImage}><img src={board.postImgUrl}></img></div>}
                    <div id={styles.content}>
                        <div>{board.content}</div>
                    </div>
                </div>
                <div id={styles.replyWrapper}> 
                    {replyList==null?null:

                    replyList.map((item,idx)=>{
                        return(
                            <div id={styles.replyBox} key={idx}>
                                <div id={styles.replyWriter}>{item.writer}</div>
                                <div id={styles.etc2}>
                                    <div id={styles.date}>{new Date(item.time).getFullYear()}년 {new Date(item.time).getMonth()}월 {new Date(item.time).getDay()}일 {new Date(item.time).getHours()}시</div>
                                    {item.user_user_id==sessionStorage.getItem("id")?<div id={styles.delete} onClick={() => replyDelete(item.id)}>삭제</div>:null }
                                                              
                                </div>
                                <div id={styles.reply}>{item.content}</div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div id={styles.writeReply}>
                <input id={styles.replyInput} onChange={replyChange} onKeyDown={Enters} value={reply}/>
                <img onClick={send} id={styles.send} src="/img/send.png"/>
            </div>
        </div>
    )
}

export default BoardDetail;