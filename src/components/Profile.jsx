import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const StProfile = styled.div`
  width: 100%;
  height: 200px;
  border: 1px solid black;
`;
const StBodyRight = styled.div`
  width: 20%;
  flex-direction: column;
  box-sizing: border-box;
`;
const StWriteBtn = styled.div`
  width: 100%;
  height: 40px;
  margin: 10px 0;
  padding: 10px 0;
  text-align: center;
  box-sizing: border-box;
  cursor: pointer;
  color: white;
  background-color: #F8AD9D;
`;

function Profile() {
  const navigate = useNavigate();

  const goToWrite = () => {
    navigate('/Write')
  }
  return (
    <StBodyRight>
      <StProfile>Profile</StProfile>
      <StWriteBtn
      onClick={goToWrite}>글쓰기</StWriteBtn>
    </StBodyRight>
  );
}

export default Profile;
