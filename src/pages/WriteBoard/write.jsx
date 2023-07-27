import React,{useState} from "react";
import styles from "./write.module.css"
import Header from "../../components/Header/header";
function Write(){
    const [title,setTitle]=useState("")
    const [content,setContent]=useState("")

    const onChangeTitle=(e)=>{
        setTitle(e.target.value)
    }
    const onChangeContent=(e)=>{
        setContent(e.target.value)
    }
    return(
        <div id={styles.wrapper}>
            <Header></Header>    
            <div id={styles.writeForm}>
                <input onChange={onChangeTitle} type="text" id={styles.title} placeholder="제목을 입력하세요"/>
                <textarea onChange={onChangeContent} id={styles.content} placeholder="내용을 입력하세요."></textarea>
            </div>
        </div>
    )
}

export default Write;