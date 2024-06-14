import { useNavigate } from "react-router-dom";
import styled from "styled-components";

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
`;

function Layout() {
  const navigate = useNavigate();
  
  const goToLogin = () => {
    navigate('/Login');
  }

  return (
    <StLoginBox>
      <StLogin>
      <p style={{color: "#F4978E"}}
      onClick={goToLogin}>로그인</p>
      </StLogin>
    </StLoginBox>
  )
}

export default Layout