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
    const [buttonChk2,setButtonChk2]=useState(true)
    const[emailValid,setEmailValid]  = useState(false);
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
    const changeId=(e)=>{
        setId(e.target.value)
    }
    const changeEmail=async(e)=>{
        const newEmail=e.target.value
        setEmail(newEmail)
        try {
            const response = await axios.post("/validation/email", { email: newEmail });
          if(response.data==true){
            setEmailValid(true)
            setButtonChk2(true)
            }
            else{
                setEmailValid(false)
                setButtonChk2(false)
            }
        } catch (error) {
          console.log(error);
        }
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
            const response = await axios.post("/validation/id", { user_user_id: id });
          console.log(response)
          if(response.data==true){
            setButtonChk(true);
            alert("아이디가 중복됩니다.")
            setInputChk(false)
          }
          else{
            alert("중복확인이 완료되었습니다.")
            setButtonChk(false);
            setInputChk(true)
          }
        } catch (error) {
          console.log(error);
          alert("중복확인에 실패하였습니다.");
        }
      };


      const onKeyPress=(e)=>{
        if(e.key=="Enter"){
            idcheck()
        }
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
        
        const apiUrl = "member/add";

        const updatedUserInfo = {
        user_user_id: id, 
        password: pw1, 
        nickname:nick,
        email:email
        };

        axios.post(`${apiUrl}`, updatedUserInfo)
        .then((response) => {
            console.log("User updated successfully:", response.data);
            alert("회원가입을 완료하였습니다.")
            window.location.href="/"
        })
        .catch((error) => {
            alert("이미 가입된 이메일 입니다.")
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
                        <div id={styles.idWrap}>
                            <input id={styles.inputId} onChange={changeId} disabled={inputChk} placeholder="아이디를 입력해주세요"type="text" onKeyDown={onKeyPress}></input>
                            <button onClick={idcheck} type="button">확인</button>
                        </div>
                    </div>
                    <div id={styles.form}>
                        <span >이메일</span>
                        <div id={styles.emailWrap}>
                            <input onChange={changeEmail} id={styles.inputEmail} placeholder="이메일 입력해주세요"type="text" ></input>
                            {emailValid&&email.length>0&&(
                                <div id={styles.emailCheck}>중복된 이메일 입니다</div>  
                            )}
                        </div>
                    </div>
                    <Form onInputChange={changePw1} spanName="비밀번호" placeholder="특수문자 제외 10자리 이상 입력해주세요." type="text"></Form>
                    <Form onInputChange={changePw2} spanName="비밀번호 확인" placeholder="비밀번호를 다시 입력해주세요" type="text"></Form>
                    <Form onInputChange={changeNick} spanName="닉네임" placeholder="닉네임을 입력해주세요" type="text"></Form>
                </div>
                <button onClick={registerBtn} type="button" disabled={buttonChk||buttonChk2} id={styles.registerBtn} >회원가입</button>
            </div>
        </div>
    )
}
export default Register;