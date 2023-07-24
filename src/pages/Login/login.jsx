import React,{useState,useEffect} from "react"
import styles from './login.module.css'
import axios from "axios";
import 'url-polyfill';
import Form from "../../components/Form/form";
import {Link} from 'react-router-dom';

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

    const login=()=>{
        if(id==""){
            alert("아이디를 입력해주세요")
        }
        if(pw==""){
            alert("패스워드를 입력해주세요")
        }
        axios.get("http://localhost:3001/users")
        .then((response) => {
            let isLoginSuccessful = false;

            for(var i=0; i<response.data.length; i++){
                if(response.data[i].username==id && response.data[i].password==pw){
                    isLoginSuccessful=true
                    alert("로그인하였습니다.")
                    window.location.href="/board"
                    break
                }
            }
            if(!isLoginSuccessful){
                alert("로그인에 실패하셨습니다.")
                window.location.reload()
            }
        }
        )
        
        .catch((error) => console.log(error));
    }
    return(
        <div id={styles.wrapper}>
            <div id={styles.logo}>
                <img src="#" alt="로고사진"></img>
            </div>
            <div id={styles.loginFormWrapper}>
                <div id={styles.loginForm}> 
                    <Form spanName="아이디" placeholder="아이디를 입력해주세요" onInputChange={idChange} type="text"></Form>
                    <Form spanName="비밀번호" placeholder="비밀번호를 입력해주세요" onInputChange={pwChange} enter={onKeyPress} type="password"></Form>
                    <button type="button" id={styles.submit} onClick={login}>로그인</button>
                </div>
                <span id={styles.link}><Link id={styles.register} to={"/Register"}>회원가입</Link> | <a>비밀번호 찾기</a></span>
            </div>
        </div>
    )
}
export default Login