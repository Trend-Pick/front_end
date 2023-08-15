import React,{useState,useEffect,useRef} from "react";
import styles from "./write.module.css"
import Header from "../../components/Header/header";
import { useLocation } from 'react-router-dom';
import axios from "axios";

function BoardEdit(){
    const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get('id');
    const [title,setTitle]=useState("")
    const [content,setContent]=useState("")
    const [image,setImage]=useState("")
    const [currentTime, setCurrentTime] = useState(new Date());
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
    const submit = async () => {
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
        try {
          await axios.put(`/update_post/${id}`, formData,{headers: {
            'Content-Type': 'multipart/form-data',
        }})
          console.log("수정되었습니다.")
          window.location.href="/board"
        } catch (e) {
          console.log(e);
        }
      };
      const imageInput = useRef();

    const onClickImageUpload = () => {
        imageInput.current.click();
      };
        
    const deleteImage=()=>{
        setImage("")
    }
    useEffect(()=>{
        const fetchData = async () => { 
            try {
              const response = await axios.get(`/post/${id}`);
              console.log(response.data);
              setTitle(response.data.title);
              setContent(response.data.content);
              setImage(response.data.postImgUrl)
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
                <div className={styles.filebox}>
                    <label htmlFor={styles.file} onClick={onClickImageUpload}>+</label>
                        <input type="file" style={{display:"none"}} id={styles.file} ref={imageInput} onChange={onChangeImage}/> 
                        {image.name==null?<div id={styles.imageName} onClick={deleteImage}>{image.length > 40
                      ? image.slice(0, 40) + "..."
                      : image}</div>:<div id={styles.imageName} onClick={deleteImage} >{image.name.length > 40
                        ? image.name.slice(0, 40) + "..."
                        : image.name}</div>}
                </div>
            </div>

            <button type="button" onClick={submit}>확인</button>
        </div>
    )
}
export default BoardEdit