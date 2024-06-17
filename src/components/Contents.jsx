import styled from "styled-components";

const StContentsBox = styled.div`
  width: 70%;
  height: auto;
  min-height: 800px;
  max-width: 1400px;
  min-width: 800px;
`;
const StClubImgBox = styled.div`
  width : 100%;
  height: 300px;
  border: 1px solid #F4978E;
  margin-bottom: 30px;
`;

const StNewContentsBox = styled.div`
  width : 100%;
  height: auto;
  min-height: 600px;
  border: 1px solid #F4978E;
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