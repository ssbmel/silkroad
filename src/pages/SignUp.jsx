import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import supabase from "../supabase/supabaseClient";
import { useRef } from "react";



function SignUp() {
  const navigate = useNavigate();
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const nicknameRef = useRef(null);

  const goToLogin = () => {
    navigate("/Login");
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase.auth.signUp({
      email: emailRef.current.value,
      password: passwordRef.current.value,
      nickname: nicknameRef.current.value,
    });

    if (error) {
      alert('아이디와 비밀번호를 확인해주세요.');
      throw error;
    } alert('회원가입 성공!');
      navigate('/Login');

    console.log(data);

    const { data: user } = await supabase.from("user_table").insert({
      id: data.user.id,
      created_at: data.user.created_at,
      email: data.user.email,
      nickname: nicknameRef.current.value,
    });
  };

  return (
    <>
      <StContainer>
        <StIdPwForm onSubmit={handleSignUp}>
          <StLoginTitle>회원가입</StLoginTitle>
          <StIdInput placeholder="@email.com" ref={emailRef} />
          <StPwInput
            type="password"
            placeholder="비밀번호를 입력하세요."
            ref={passwordRef}
          />
          <StNicknameInput
            placeholder="닉네임을 입력하세요."
            ref={nicknameRef}
          />
          <StBtnBox>
            <StSignUpBtn>가입하기</StSignUpBtn>
            <StBackBtn onClick={goToLogin}>뒤로가기</StBackBtn>
          </StBtnBox>
        </StIdPwForm>
      </StContainer>
    </>
  );
}

export default SignUp;

const StContainer = styled.div`
  width: 400px;
  height: 600px;
  background-color: #ffeae0;
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
  background-color: #c0776f;
  color: white;
  border: none;
  margin-top: 5px;
  cursor: pointer;
`;
const StBackBtn = styled.button`
  width: 250px;
  height: 35px;
  background-color: #fbc4ab;
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