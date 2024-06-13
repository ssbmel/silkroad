import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const StLoginBox = styled.div`
  width : 1200px;
  height : 50px;
  margin : 10px auto;
  display: flex;
`;
const StLogin = styled.div`
  width: 100%;
  display: flex;
  justify-content: right;
  gap: 10px;
  cursor: pointer;
  margin-top: 50px;
  align-items: center;
`;
const StProfile = styled.div`
  width: 30px;
  height: 30px;
  border: 1px solid black;
  border-radius : 50%;
  cursor: pointer;
`;

function Layout() {
  const navigate = useNavigate();
  
  const goToLogin = () => {
    navigate('/Login');
  }

  const goToMyPage = () => {
    navigate('/MyPage');
  }

  return (
    <StLoginBox>
      <StLogin>
      <StProfile onClick={goToMyPage}/>
      <p style={{color: "#F4978E"}}
      onClick={goToLogin}>로그인</p>
      </StLogin>
    </StLoginBox>
  )
}

export default Layout