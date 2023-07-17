import React from "react"
import styled from "styled-components";

function Login(){
    const InputWrapper = styled.div`
        height:100vh;
    `;

    const Logo = styled.div`
        height:50vh;
    `;

    const LoginForm=styled.div`
        height:40vh;
    `;
    return(
        <InputWrapper>
            <Logo>
                <img src="#"></img>
            </Logo>
            <div id="loginForm">
                <form>
                    <label htmlFor="id">아이디</label><br/>
                    <input type="text" id="id"></input><br/>
                    <label htmlFor="pw">패스워드</label><br/>
                    <input type="text" id="pw"></input>
                </form>
            </div>
            <div></div>
        </InputWrapper>
    )
}
export default Login