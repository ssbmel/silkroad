import styled from "styled-components";
import logo from "../img/silkroadlogo.png";
import Layout from "./Layout";
import { useNavigate } from "react-router-dom";

const StTitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin: 20px auto 50px;
`;

const StLogo = styled.img`
  width: 100px;
`;

const StTitleText = styled.h1`
  font-size: 40px;
  margin: 0;
  color: #f4978e;
`;

const StLine = styled.div`
  width: 1400px;
  margin: 20px auto 50px auto;
  border-bottom: 1px solid #f4978e;
`;

const StNavibar = styled.div`
  display: flex;
  justify-content: center;
  gap: 70px;
`;

const StNavibarContent = styled.div`
  cursor: pointer;
  font-size: 1.2rem;
  color: #f4978e;
`;

function Header() {
  const navigate = useNavigate();

  const goToMain = () => {
    navigate('/');
  }
  return (
    <>
      <Layout />
      <StTitleWrapper onClick={goToMain}>
        <StLogo src={logo} alt="logo" />
        <StTitleText>Silk Road</StTitleText>
      </StTitleWrapper>
      <StNavibar>
        <StNavibarContent>사이트 소개</StNavibarContent>
        <StNavibarContent>앨범</StNavibarContent>
        <StNavibarContent>정보모음</StNavibarContent>
        <StNavibarContent>공지사항</StNavibarContent>
      </StNavibar>
      <StLine />
    </>
  );
}

export default Header;
