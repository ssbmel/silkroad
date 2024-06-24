import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";



function Layout() {
  const navigate = useNavigate();


  useEffect(()=>{
    const token = localStorage.getItem('accessToken');
    console.log(token);
  },[]);
  
  const goToLogin = () => {
    navigate('/Login');
  }

  return (
    <StLoginBox>
      <StLogin>
      <p onClick={goToLogin}>로그인/회원가입</p>
      </StLogin>
    </StLoginBox>
  )
}

export default Layout;

const StLoginBox = styled.div`
  width : 1400px;
  height : 50px;
  margin : 10px auto;
  display: flex;
`;
const StLogin = styled.div`
  width: 100%;
  display: flex;
  justify-content: right;
  cursor: pointer;
  margin-top: 50px;
  align-items: center;
  color: #F4978E;
`;