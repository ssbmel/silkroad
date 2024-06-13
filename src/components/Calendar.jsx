import styled from "styled-components";
import Search from "./Search";

const StCalendar = styled.div`
  width: 100%;
  height: 200px;
  border: 1px solid black;
`;
const StBodyLeft = styled.div`
  width: 20%;
  flex-direction: column;
  box-sizing: border-box;
`;

function Calendar() {
  return (
    <>
      <StBodyLeft>
      <StCalendar>달력</StCalendar>
      <Search />
      </StBodyLeft>
    </>
  );
}

export default Calendar;
