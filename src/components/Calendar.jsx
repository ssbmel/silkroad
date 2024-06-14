import styled from "styled-components";
import Search from "./Search";

const StBodyLeft = styled.div`
  width: 20%;
  min-width: 200px;
  flex-direction: column;
  box-sizing: border-box;
`;

const StCalendar = styled.div`
  width: 100%;
  height: 200px;
  border: 1px solid black;
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
