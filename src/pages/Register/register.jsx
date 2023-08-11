import React,{useState} from "react";
import styles from "./register.module.css"
import Form from "../../components/Form/form";
import axios from "axios";
function Register(){
    const [inputChk,setInputChk]=useState(false)
    const [bool,setBool]=useState(false)
    const [id,setId]=useState("")
    const [email,setEmail]=useState("")
    const [pw1,setPw1]=useState("")
    const [pw2,setPw2]=useState("")
    const [nick,setNick]=useState("")
    const [buttonChk,setButtonChk]=useState(true)
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
    const changeId=(e)=>{
        setId(e.target.value)
    }
    const changeEmail=(e)=>{
        setEmail(e.target.value)
    }
    const changePw1=(e)=>{
        setPw1(e.target.value)
        if (passwordRegex.test(pw1)){
            setBool(true)
        }
        else{
            setBool(false)
        }
    }
    const changePw2=(e)=>{
        setPw2(e.target.value)
    }
    const changeNick=(e)=>{
        setNick(e.target.value)
    }
    const idcheck = async () => {
        if(id===""){
            alert("아이디를 입력해주세요")
            return
        }
        try {
            const response = await axios.post("/validation/id", { userId: id }
              );
          setButtonChk(true);
          for (var i = 0; i < response.data.length; i++) {
            if (response.data[i].username === id) {
              alert("아이디가 중복됩니다.");
              return;
            }
          }
          alert("중복확인이 완료되었습니다.");
          setButtonChk(false);
          setInputChk(true)
        } catch (error) {
          console.log(error);
          alert("중복확인에 실패하였습니다.");
        }
      };


      const idcheck2=()=>{
        axios.get(`/validation?userId=${id}`)
        .then((reponse)=>{
            console.log(reponse)
        })
        .catch((e)=>{
            console.log(e)
        })
      }
      
    const registerBtn=(e)=>{
        if(id===""){
            alert("아이디를 입력해주세요")
            return
        }
        if(email===""){
            alert("이메일을 입력해주세요")
            return
        }
        if(pw1===""){
            alert("패스워드를 입력해주세요")
            return
        }
        if(nick===""){
            alert("닉네임을 입력해주세요")
            return
        }
        if(!bool){
            alert("8자이상 숫자 영문 특수문자를 포함해주세요")
            return
        }
        if(pw1!=pw2){
            alert("비밀번호가 일치하지 않습니다.")
            return
        }
        
        const apiUrl = "http://localhost:3001/users";

        
        const updatedUserInfo = {
        username: id, 
        password: pw1, 
        nick:nick,
        email:email
        };

        axios
        .post(`${apiUrl}`, updatedUserInfo)
        .then((response) => {
            console.log("User updated successfully:", response.data);
            alert("회원가입을 완료하였습니다.")
            window.location.href="/"
        })
        .catch((error) => {
            console.error("Failed to update user:", error);
        });
    }
    return(
        <div id={styles.wrapper}>
            <header id={styles.header}>회원가입</header>
            <div id={styles.registerFormWrapper}>
                <div id={styles.registerForm}>
                    <div id={styles.form}>
                        <span >아이디</span>
                        <div>
                            <input onChange={changeId} disabled={inputChk} placeholder="아이디를 입력해주세요"type="text"></input>
                            <button onClick={idcheck} type="button">확인</button>
                        </div>
                    </div>
                    <Form onInputChange={changeEmail} spanName="이메일" placeholder="이메일을 입력해주세요" type="text"></Form>
                    <Form onInputChange={changePw1} spanName="비밀번호" placeholder="특수문자 제외 10자리 이상 입력해주세요." type="text"></Form>
                    <Form onInputChange={changePw2} spanName="비밀번호 확인" placeholder="비밀번호를 다시 입력해주세요" type="text"></Form>
                    <Form onInputChange={changeNick} spanName="닉네임" placeholder="닉네임을 입력해주세요" type="text"></Form>
                </div>
                <button onClick={registerBtn} type="button" disabled={buttonChk} id={styles.registerBtn} >회원가입</button>
            </div>
        </div>
    )
}
export default Register;