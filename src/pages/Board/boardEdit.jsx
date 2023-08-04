import React,{useState,useEffect} from "react";
import styles from "./write.module.css"
import Header from "../../components/Header/header";
import { useLocation } from 'react-router-dom';
import axios from "axios";

function BoardEdit(props){
    const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get('id');
    const [title,setTitle]=useState("")
    const [content,setContent]=useState("")
    const [currentTime, setCurrentTime] = useState(new Date());
    const onChangeTitle=(e)=>{
        setTitle(e.target.value)
    }
    const onChangeContent=(e)=>{
        setContent(e.target.value)
    }
    const submit = async () => {
        try {
          await axios.put(`http://localhost:3001/boardList/${id}`, {
            title: title,
            content: content,
            date:Math.floor(currentTime)
          });
          console.log("수정되었습니다.")
          window.location.href="/board"
        } catch (e) {
          console.log(e);
        }
      };
    useEffect(()=>{
        const fetchData = async () => { 
            try {
              const response = await axios.get(`http://localhost:3001/boardList?id=${id}`);
              console.log(response.data);
              setTitle(response.data[0].title);
              setContent(response.data[0].content);
            } catch (e) {
              console.log(e)
            }
          };
          fetchData();
    },[id])
    return(
            <div id={styles.wrapper}>
            <Header></Header>    
            <div id={styles.writeForm}>
                <input onChange={onChangeTitle} value={title} type="text" id={styles.title} placeholder="제목을 입력하세요"/>
                <textarea onChange={onChangeContent} value={content} id={styles.content} placeholder="내용을 입력하세요."></textarea>
            </div>
            <button type="button" onClick={submit}>확인</button>
        </div>
    )
}
export default BoardEdit