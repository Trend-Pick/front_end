import React,{useState} from "react";
import styles from "./findPw.module.css"
import axios from "axios"

function FindPw({setModalOpen}){
    const [email,setEmail]=useState("")
    const onEmailChange=(e)=>{
        setEmail(e.target.value)
    }
    const closeModal = () => {
        setModalOpen(false);
    };
    const submit=()=>{
        axios.post("/member/findPassword",{
            email:email
        },{
            headers: {
              'Content-Type': 'application/json',
            },
          })
          .then((response)=>{
            console.log(response)
          })
          .catch((err)=>{
            console.log(err)
          })
    }
    return(
        <div id={styles.wrapper}>
            <button className={styles.close} onClick={closeModal}>x</button>
            <div id={styles.title}>비밀번호찾기</div>
            <input id={styles.EmailInput} placeholder="이메일을 입력해주세요" onChange={onEmailChange}></input>
            <button id={styles.pwSubmit} onClick={submit}>임시 비밀번호 전송</button>
        </div>
    )
}

export default FindPw;