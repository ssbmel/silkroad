import styled from "styled-components";
import Calendar from "../components/Calendar";
import Contents from "../components/Contents";
import Header from "../components/Header";
import Layout from "../components/Layout";
import Profile from "../components/Profile";
import Navibar from "../components/Navibar";

const Container = styled.div`
  width: 80%;
  min-height: 600px;
  display: flex;
  margin: 20px auto;
  gap: 60px;
  justify-content: center;
`;


function MainPage() {
  return (
    <>
      <Layout />
      <Header />
      <Navibar />
      <hr style={{width : "80%"}}/>
      <Container>
        <Calendar />
        <Contents />
        <Profile />
      </Container>
    </>
  );
}

export default MainPage;
