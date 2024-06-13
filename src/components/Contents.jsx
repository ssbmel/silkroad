import styled from "styled-components";

const StContentsBox = styled.div`
  width: 60%;
  height: 800px;
  border: 1px solid black;
  max-width: 1000px;
`;
const StClubImgBox = styled.div`
  width : 90%;
  height: 40%;
  border: 1px solid black;
  margin: 30px auto;

`;

const StNewContentsBox = styled.div`
  width : 90%;
  height: 40%;
  border: 1px solid black;
  margin: 30px auto;
`;

function Contents() {
  return (
    <StContentsBox>
      <StClubImgBox>모임사진</StClubImgBox>
      <StNewContentsBox>최신글</StNewContentsBox>
    </StContentsBox>
  )
}

export default Contents