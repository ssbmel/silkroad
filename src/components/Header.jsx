import styled from "styled-components";
import logo from "../img/logotitle.png";

function Header() {

const StTitle = styled.img`
  width: 200px;
  display: flex;
  font-size: 50px;
  margin: 20px auto 50px;
  cursor: pointer;

`;
  return (
    <>
      <StTitle src={logo} alt={logo} />
    </>
  );
}

export default Header;
