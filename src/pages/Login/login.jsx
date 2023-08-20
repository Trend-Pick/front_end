import React,{useState,useEffect} from "react"
import styles from './login.module.css'
import axios from "axios";
import 'url-polyfill';
import Form from "../../components/Form/form";
import {Link} from 'react-router-dom';
import FindPw from "../../pages/findPw/findPw";
import { motion } from "framer-motion";
import Animation from "../../components/Animation/animation";
function Login(){
    const [id,setId]=useState("")
    const [pw,setPw]=useState("")

    const idChange=(e)=>{
        setId(e.target.value)
    }
    const pwChange=(e)=>{
        setPw(e.target.value)
    }
    const onKeyPress=(e)=>{
        if(e.key=="Enter"){
            login()
        }
    }
    const [modalOpen, setModalOpen] = useState(false);
    const showModal = () => {
        setModalOpen(true);
    };
    const login=()=>{
        if(id==""){
            alert("아이디를 입력해주세요")
        }
        if(pw==""){
            alert("패스워드를 입력해주세요")
        }
        axios.post("/login",{
            user_user_id:id,
            password:pw
        },{
            headers: {
              'Content-Type': 'application/json',
            },
          })
        .then((reponse)=>{
            alert("로그인에 성공하셨습니다.")
            sessionStorage.setItem("id",id)
            window.location.href="/board"
            console.log(reponse)
        })
        .catch((e)=>{
            console.log(e)
            alert("로그인에 실패하셨습니다")
        })
    }
    return(
        <div id={styles.wrapper}>
            <div id={styles.logo}>c
                <img src="#" alt="로고사진"></img>
            </div>
            <div id={styles.loginFormWrapper}>
                <div id={styles.loginForm}> 
                    <Form spanName="아이디" placeholder="아이디를 입력해주세요" onInputChange={idChange} type="text"></Form>
                    <Form spanName="비밀번호" placeholder="비밀번호를 입력해주세요" onInputChange={pwChange} enter={onKeyPress} type="password"></Form>
                    <button type="button" id={styles.submit} onClick={login}>로그인</button>
                </div>
                <span id={styles.link}><Link id={styles.register} to={"/Register"}>회원가입</Link> | <span onClick={showModal}>비밀번호 찾기</span>{modalOpen && <FindPw setModalOpen={setModalOpen} />}</span>
            </div>
        </div>
    )
}
export default Login