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
    const [board, setBoard] = useState([{}]);
    const [replyList,setReplyList]=useState([{}])
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
    },[idx])


    
    const send=async ()=>{
        const updateReply={
            content:reply
        }
        try {
            const response = await axios.post(`/create/${idx}/comment`,updateReply);
        
            window.location.reload()
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
            if(response.data=="ok"){
                window.location.reload()
            }
            else if(response.data==''){
                alert("본이 게시글만 삭제 가능합니다.")
            }
        })
        .catch((err)=>{
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
                window.location.reload()
            }
            else if(response.data==''){
                alert("본이 댓글만 삭제 가능합니다.")
            }
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
                        <div id={styles.edit}><Link to={`/boardEdit?id=${board.id}`}>수정</Link> | <div onClick={boardDelete}>삭제</div></div>
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
                                    <div id={styles.delete} onClick={() => replyDelete(item.id)}>삭제</div>                                </div>
                                <div id={styles.reply}>{item.content}</div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div id={styles.writeReply}>
                <input id={styles.replyInput} onChange={replyChange} />
                <img onClick={send} id={styles.send} src="/img/send.png"/>
            </div>
        </div>
    )
}

export default BoardDetail;