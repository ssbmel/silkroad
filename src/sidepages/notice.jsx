import styled from "styled-components";
import Calendar from "../components/Calendar"
import Profile from "../components/Profile"
import Header from "../header/Header"

const Container = styled.div`
  width: 70%;
  min-width: 800px;
  max-width: 1400px;
  display: flex;
  margin: 20px auto;
  gap: 40px;
  justify-content: center;
`;
const StContentsBox = styled.div`
  width: 70%;
  min-height: 900px;
  height: auto;
  border: 1px solid #F4978E;
  max-width: 1400px;
  min-width: 800px;
`;

function Notice() {
  return (
    <>
      <Header />
      <Container>
        <Profile />
        <StContentsBox />
        <Calendar />
      </Container>
    </>
  )
}

export default Notice