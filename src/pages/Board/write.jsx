import React,{useState,useEffect} from "react";
import styles from "./write.module.css"
import Header from "../../components/Header/header";
import axios from "axios";

function Write(){
    const [title,setTitle]=useState("")
    const [content,setContent]=useState("")
    const [id,setId]=useState("")
    const [currentTime, setCurrentTime] = useState(new Date());
    const onChangeTitle=(e)=>{
        setTitle(e.target.value)
    }
    const onChangeContent=(e)=>{
        setContent(e.target.value)
    }
    const write=()=>{
        let createPostRequest={
            title:title,
            content:content
        } 
        axios
        .post("/create_post", {createPostRequest})
        .then((response) => {
            console.log("Board updated successfully:", response.data);
            alert("게시글을 작성했습니다.")
            window.location.href="/board"
        })
        .catch((error) => {
            console.error("Failed:", error);
        }); 
    }
    
    useEffect(()=>{
        console.log(sessionStorage.getItem("id"))
        setId(sessionStorage.getItem("id"))
    },[])
        
        
    return(
        <div id={styles.wrapper}>
            <div id={styles.writeForm}>
                <input onChange={onChangeTitle} type="text" id={styles.title} placeholder="제목을 입력하세요"/>
                <textarea onChange={onChangeContent} id={styles.content} placeholder="내용을 입력하세요."></textarea>
            </div>
            <button type="button" onClick={write}>확인</button>
        </div>
    )
}

export default Write;