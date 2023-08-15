import React,{useState,useEffect} from "react";
import styles from "./write.module.css"
import Header from "../../components/Header/header";
import axios from "axios";

function Write(){
    const [title,setTitle]=useState("")
    const [content,setContent]=useState("")
    const [image,setImage]=useState("")
    const onChangeTitle=(e)=>{
        setTitle(e.target.value)
    }
    const onChangeContent=(e)=>{
        setContent(e.target.value)
    }
    const onChangeImage=(e)=>{
        setImage(e.target.files[0])
        console.log(e.target.files[0])
    }
    const write=()=>{
        if(title==""){
            alert("제목을 작성해주세요")
            return
        }
        else if(content==""){
            alert("내용을 입력해주세요")
            return
        }
        else{
            const formData = new FormData();
            let createPostRequest={
                title:title,
                content:content
            }
            if(image==""){
                formData.append("createPostRequest",new Blob([JSON.stringify(createPostRequest)], {type:"application/json"}));
            }
            else{
                formData.append("createPostRequest",new Blob([JSON.stringify(createPostRequest)], {type:"application/json"}));
                formData.append("imgInPost",new Blob([JSON.stringify(image)],{type:"multipart/form-data"}));
            }
            axios.post("/create_post", formData,{headers: {
                'Content-Type': 'multipart/form-data',
            }})
            .then((response) => {
                console.log("Board updated successfully:", response.data);
                alert("게시글을 작성했습니다.")
                window.location.href="/board"
            })
            .catch((error) => {
                console.error("Failed:", error);
            }); 
        }
        
    }
    
        
        
    return(
        <div id={styles.wrapper}>
            <div id={styles.writeForm}>
                <input onChange={onChangeTitle} type="text" id={styles.title} placeholder="제목을 입력하세요"/>
                <textarea onChange={onChangeContent} id={styles.content} placeholder="내용을 입력하세요."></textarea>
            </div>
            <input type="file" onChange={onChangeImage}/>
            <button type="button" onClick={write}>확인</button>
        </div>
    )
}

export default Write;