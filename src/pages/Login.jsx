import { useNavigate } from "react-router-dom";
import styled from "styled-components"

const StContainer = styled.div`
  width: 400px;
  height: 500px;
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
`;
const StIdInput = styled.input`
  width: 200px;
  height: 30px;
  border: none;
`;
const StPwInput = styled.input`
  width: 200px;
  height: 30px;
  border: none;
`;
const StBtnBox = styled.div`
  width: 200px;
  display: grid;
  margin-top: 20px;
`;
const StLoginBtn = styled.button`
  width: 210px;
  height: 35px;
  background-color: #C0776F;
  color: white;
  border: none;
  margin-top: 5px;
  cursor: pointer;
`;
const StSignUpBtn = styled.button`
  width: 210px;
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

function Login() {
  const navigate = useNavigate();

  // const goToLogin = () => {
  //   navigate('/Login');
  // }

  const goToSignUp = () => {
    navigate('/SignUp');
  }

  return (
    <>
      <StContainer>
        <StIdPwForm>
          <StLoginTitle>로그인</StLoginTitle>
          <StIdInput placeholder="아이디를 입력하세요."/>
          <StPwInput placeholder="비밀번호를 입력하세요."/>
          <StBtnBox>
            <StLoginBtn>로그인</StLoginBtn>
            <StSignUpBtn 
            onClick={goToSignUp}>회원가입</StSignUpBtn>
          </StBtnBox>
        </StIdPwForm>
      </StContainer>
    </>
  )
}

export default Login