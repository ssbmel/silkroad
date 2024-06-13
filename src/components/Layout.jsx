import styled from "styled-components";

const StLoginBox = styled.div`
  width : 80%;
  height : 50px;
  margin : 10px auto;
`;
const StLogin = styled.div`
  width: 100%;
  display: flex;
  justify-content: right;
  gap: 10px;
  cursor: pointer;
  margin-top: 50px;
  align-items: center;
`;
const StProfile = styled.div`
  width: 30px;
  height: 30px;
  border: 1px solid black;
  border-radius : 50%;
  cursor: pointer;
`;

function Layout() {

  return (
    <StLoginBox>
      <StLogin>
      <StProfile />
      로그인
      </StLogin>
    </StLoginBox>
  )
}

export default Layout