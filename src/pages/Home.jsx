import styled from "styled-components";
import Calendar from "../components/Calendar";
import Contents from "../components/Contents";
import Header from "../components/Header";
import Profile from "../components/Profile";
import Navibar from "../components/Navibar";


const Container = styled.div`
  width: 70%;
  min-width: 800px;
  max-width: 1400px;
  display: flex;
  margin: 20px auto;
  gap: 40px;
  justify-content: center;
`;
const StLine = styled.div`  
  width: 1400px;
  margin: 20px auto 50px auto;
  border-bottom: 1px solid #F4978E;
`;


function MainPage() {
  return (
    <>
      <Header />
      <Navibar />
      <StLine />
      <Container>
        <Profile />
        <Contents />
        <Calendar />
      </Container>
    </>
  );
}

export default MainPage;
