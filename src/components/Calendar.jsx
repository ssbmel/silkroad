import styled from "styled-components";

const StCalendar = styled.div`
  width: 20%;
  height: 250px;
  border: 1px solid black;
`;

function Calendar() {
  return (
    <>
      <StCalendar>달력</StCalendar>
    </>
  );
}

export default Calendar;
