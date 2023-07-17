import React,{useState,useEffect} from "react"
import styles from './login.module.css'
import axios from "axios";
import 'url-polyfill';


function Login(){
    const [id,setId]=useState("")
    const [pw,setPw]=useState("")

    const idChange=(e)=>{
        setId(e.target.value)
    }
    const pwChange=(e)=>{
        setPw(e.target.value)
    }

    const login=()=>{
        axios.get("http://localhost:3001/users")
        .then((response) => {
            console.log(response.data)
            for(var i=0; i<response.data.length; i++){
                if(response.data[i].username==id && response.data[i].password==pw){
                    alert("로그인 성공")
                    break
                }
                else{
                    alert("실패")
                    window.location.reload()
                    break
                }
            }
        }
        )
        
        .catch((error) => console.log(error));
    }
    return(
        <div>
            <div id={styles.logo}>
                <img src="#" alt="로고사진"></img>
            </div>
            <div id={styles.loginFormWrapper}>
                <div id={styles.loginForm}> 
                    <span id={styles.label}>아이디</span><br></br>
                    <input onChange={idChange} placeholder="아이디를 입력해주세요" id={styles.id} type="text"></input><br></br>
                    <span id={styles.label}>비밀번호</span><br></br>
                    <input onChange={pwChange} id={styles.pw} placeholder="비밀번호를 입력해주세요" type="text"></input><br></br>
                    <button type="button" id={styles.submit} onClick={login}>로그인</button>
                </div>
                <span id={styles.link}><a>회원가입</a> | <a>비밀번호 찾기</a></span>
            </div>
        </div>
    )
}
export default Login