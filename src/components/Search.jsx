import styled from "styled-components"

const StSearchBox = styled.input`
  width: 100%;
  height: 25px;
  border: 1px solid black;
  border-radius: 15px;
  margin: 10px 0;
`;

function Search() {
  return (
    <>
      <StSearchBox></StSearchBox>
    </>
  )
}

export default Search