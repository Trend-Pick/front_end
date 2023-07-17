import React from "react"
import styles from './login.module.css'
import styled from "styled-components";

function Login(){
    return(
        <div>
            <div id={styles.logo}>
                <img src="#" alt="로고사진"></img>
            </div>
            <div id={styles.loginFormWrapper}>
                <form id={styles.loginForm}> 
                    <span id={styles.label}>아이디</span><br></br>
                    <input placeholder="아이디를 입력해주세요" id={styles.id} type="text"></input><br></br>
                    <span id={styles.label}>비밀번호</span><br></br>
                    <input id={styles.pw} placeholder="비밀번호를 입력해주세요" type="text"></input><br></br>
                    <button type="submit" id={styles.submit}>로그인</button>
                </form>
                <span id={styles.link}><a>회원가입</a> | <a>비밀번호 찾기</a></span>
            </div>
        </div>
    )
}
export default Login