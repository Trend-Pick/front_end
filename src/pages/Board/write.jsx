import React,{useState,useEffect,useRef} from "react";
import styles from "./write.module.css"
import Header from "../../components/Header/header";
import axios from "axios";

import {FiPlusCircle, FiArrowLeft} from "react-icons/fi";
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
    const imageInput = useRef();

    const onClickImageUpload = () => {
        imageInput.current.click();
      };
        
    const deleteImage=()=>{
        setImage("")
    }
    return(
        <div id={styles.wrapper}>
                  <Header  type={"board_write"} buttons={[<FiArrowLeft/>,<FiPlusCircle/>]} handleBtnClick={write}></Header>
            <div id={styles.writeForm}>
                <input onChange={onChangeTitle} type="text" id={styles.title} placeholder="제목을 입력하세요"/>
                <textarea onChange={onChangeContent} id={styles.content} placeholder="내용을 입력하세요."></textarea>
                <div className={styles.filebox}>
                    <label htmlFor={styles.file} onClick={onClickImageUpload}>+</label>
                        <input type="file" style={{display:"none"}} id={styles.file} ref={imageInput} onChange={onChangeImage}/> 
                        {image.name==null?null:<div id={styles.imageName} onClick={deleteImage}>{image.name.length > 40
                        ? image.name.slice(0, 40) + "..."
                        : image.name}</div>}
                </div>
            </div>
        </div>
    )
}

export default Write;