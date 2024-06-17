import styled from "styled-components";
import Header from "../header/Header";

const StTextBox = styled.div`
  width: 70%;
  min-width: 1200px;
  max-width: 1400px;
  margin: 200px auto;
  text-align: center;
  font-size: 1.5rem;
`;

function Introduce() {
  return (
    <>
      <Header />
      <StTextBox>
        <h3 style={{
          margin: "100px"
        }}>Silk Road 소개</h3>
        <p>
          silk road는 대바늘, 코바늘 등 뜨개질을 취미로 가진 사람들이 모인 힐링
          모임입니다.
        </p>
      </StTextBox>
    </>
  );
}

export default Introduce;
