import styled from "styled-components";
import Calendar from "../components/Calendar";
import Contents from "../components/Contents";
import Header from "../components/Header";
import Layout from "../components/Layout";
import Profile from "../components/Profile";
import Navibar from "../components/Navibar";


const Container = styled.div`
  width: 70%;
  min-height: 600px;
  display: flex;
  margin: 20px auto;
  gap: 60px;
  justify-content: center;
`;
const StLine = styled.div`  
  width: 80%;
  margin: 10px auto;
  border-bottom: 1px solid #F4978E;
`;


function MainPage() {
  return (
    <>
      <Layout />
      <Header />
      <Navibar />
      <StLine />
      <Container>
        <Calendar />
        <Contents />
        <Profile />
      </Container>
    </>
  );
}

export default MainPage;
