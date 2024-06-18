import { useNavigate } from "react-router-dom";
import styled from "styled-components"
import supabase from "../supabase/supabaseClient";
import { useRef } from "react";

const StContainer = styled.div`
  width: 400px;
  height: 600px;
  background-color: #FFEAE0;
  margin: 200px auto;
  display: flex;
  border-radius: 15px;
`;
const StIdPwForm = styled.form`
  width: auto;
  height: auto;
  margin: auto;
  justify-content: center;
  display: grid;
  gap: 20px;
  padding: 50px;
`;
const StIdInput = styled.input`
  width: 250px;
  height: 30px;
  border: none;
`;
const StPwInput = styled.input`
  width: 250px;
  height: 30px;
  border: none;
`;
const StNicknameInput = styled.input`
  width: 250px;
  height: 30px;
  border: none;
`;
const StBtnBox = styled.div`
  width: 200px;
  display: grid;
  margin-top: 20px;
`;
const StSignUpBtn = styled.button`
  width: 250px;
  height: 35px;
  background-color: #C0776F;
  color: white;
  border: none;
  margin-top: 5px;
  cursor: pointer;
`;
const StBackBtn = styled.button`
  width: 250px;
  height: 35px;
  background-color: #FBC4AB;
  color: white;
  border: none;
  margin-top: 5px;
  cursor: pointer;
`;
const StLoginTitle = styled.h1`
  font-size: 30px;
  text-align: center;
  margin-bottom: 30px;
  color: black;
`;

function SignUp() {
  const navigate = useNavigate();
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  // const goToLogin = () => {
  //   navigate('/Login');
  // }

  const goToLogin = () => {
    navigate('/Login');
  }

  const handleSignUp = async (e) => {
    e.preventDefault();
    const {data, error} = await supabase.auth.signUp({
      email : emailRef.current.value,
      password : passwordRef.current.value,
    });

    if(error) {
      throw error;
    }

    console.log(data);
  }

  return (
    <>
      <StContainer>
        <StIdPwForm onSubmit={handleSignUp}>
          <StLoginTitle>회원가입</StLoginTitle>
          <StIdInput placeholder="@email.com" ref={emailRef}/>
          <StPwInput type="password" placeholder="비밀번호를 입력하세요." ref={passwordRef}/>
          <StNicknameInput placeholder="닉네임을 입력하세요."/>
          <StBtnBox>
            <StSignUpBtn
            >가입하기</StSignUpBtn>
            <StBackBtn
            onClick={goToLogin}>뒤로가기</StBackBtn>
          </StBtnBox>
        </StIdPwForm>
      </StContainer>
    </>
  )
}

export default SignUp