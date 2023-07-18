import React from "react";
import styles from "./register.module.css"
import Form from "../../components/Form/form";
function Register(){
    return(
        <div id={styles.wrapper}>
            <header id={styles.header}>회원가입</header>
            <div id={styles.registerFormWrapper}>
                <div id={styles.registerForm}>
                    <Form spanName="아이디" placeholder="아이디를 입력해주세요"></Form>
                    <Form spanName="이메일" placeholder="이메일을 입력해주세요"></Form>
                    <Form spanName="비밀번호" placeholder="특수문자 제외 10자리 이상 입력해주세요."></Form>
                    <Form spanName="비밀번호 확인" placeholder="비밀번호를 다시 입력해주세요"></Form>
                    <Form spanName="닉네임" placeholder="닉네임을 입력해주세요"></Form>
                </div>
                <button type="button" id={styles.registerBtn} >회원가입</button>
            </div>
        </div>
    )
}
export default Register;