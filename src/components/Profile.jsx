import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import profile from "../img/profileavatar.png"



function Profile() {
  const navigate = useNavigate();


  const goToMyPage = () => {
    navigate('/MyPage')

  }

  const goToWrite = () => {
    navigate('/Write')
  }
  return (
    <StBodyRight>
      <StProfile
      onClick={goToMyPage}></StProfile>
      <StWriteBtn
      onClick={goToWrite}>글쓰기</StWriteBtn>
    </StBodyRight>
  );
}

export default Profile;

const StBodyRight = styled.div`
  width: 20%;
  min-width: 200px;
  flex-direction: column;
  box-sizing: border-box;
`;

const StProfile = styled.div`
  height: 200px;
  border: 1px solid #F4978E;
  cursor: pointer;
  background-image : url(${profile});
  background-position: center;
  background-size: 300px;
`;

const StWriteBtn = styled.div`
  width: 100%;
  min-width: 200px;
  height: 40px;
  margin: 10px 0;
  padding: 10px 0;
  text-align: center;
  box-sizing: border-box;
  cursor: pointer;
  color: white;
  background-color: #F8AD9D;
`;