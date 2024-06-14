import styled from "styled-components";

const StContentsBox = styled.div`
  width: 80%;
  height: auto;
  min-height: 800px;
  border: 1px solid black;
  max-width: 1400px;
  min-width: 800px;
  padding: 2%;
  margin: 0 10px;
`;
const StClubImgBox = styled.div`
  width : 100%;
  height: 300px;
  border: 1px solid black;
  margin-bottom: 30px;
`;

const StNewContentsBox = styled.div`
  width : 100%;
  height: auto;
  min-height: 600px;
  border: 1px solid black;
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