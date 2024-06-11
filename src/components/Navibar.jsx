import styled from "styled-components";

const StNavibar = styled.div`
  justify-content: center;
  display: flex;
  gap: 70px;
`;
const StNavibarContent = styled.div`
  cursor: pointer;
  font-size: 1rem;
`;

function Navibar() {
  return (
    <StNavibar>
      <StNavibarContent>사이트 소개</StNavibarContent>
      <StNavibarContent>앨범</StNavibarContent>
      <StNavibarContent>정보모음</StNavibarContent>
      <StNavibarContent>공지사항</StNavibarContent>
    </StNavibar>
  );
}

export default Navibar;
