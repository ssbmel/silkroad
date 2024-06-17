import styled from "styled-components"
import Header from "../header/Header"
import Calendar from "../components/Calendar";
import Profile from "../components/Profile";

const StAlbumBox = styled.div`
  width: 70%;
  min-width: 800px;
  max-width: 1400px;
  min-height: 900px;
  height: auto;
  background-color: gray;
`;
const Container = styled.div`
  width: 70%;
  min-width: 800px;
  max-width: 1400px;
  display: flex;
  margin: 20px auto;
  gap: 40px;
  justify-content: center;
`;

function Album() {
  return (
    <>
      <Header />
      <Container>
        <Profile />
        <StAlbumBox />
        <Calendar />
      </Container>
    </>
  )
}

export default Album