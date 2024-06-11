import styled from "styled-components";

function Header() {

const StTitle = styled.div`
  width: 100%;
  height: 100px;
  font-size: 50px;
  text-align: center;
  margin-bottom: 50px;
`;
  return (
    <>
      <StTitle>Silk Road</StTitle>
    </>
  );
}

export default Header;
