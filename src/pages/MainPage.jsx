import styled from "styled-components";
import Calendar from "../components/Calendar";
import Contents from "../components/Contents";
import Header from "../header/Header";
import Profile from "../components/Profile";


const Container = styled.div`
  width: 70%;
  min-width: 800px;
  max-width: 1400px;
  display: flex;
  margin: 20px auto;
  gap: 40px;
  justify-content: center;
`;

function MainPage() {
  return (
    <>
      <Header />
      <Container>
        <Profile />
        <Contents />
        <Calendar />
      </Container>
    </>
  );
}

export default MainPage;
