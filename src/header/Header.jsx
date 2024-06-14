import styled from "styled-components";
import logo from "../img/logotitle.png";
import Layout from "./Layout";
import Navibar from "./Navibar";

function Header() {

const StTitle = styled.img`
  width: 200px;
  display: flex;
  font-size: 50px;
  margin: 20px auto 50px;
  cursor: pointer;
`;
const StLine = styled.div`  
  width: 1400px;
  margin: 20px auto 50px auto;
  border-bottom: 1px solid #F4978E;
`;
  return (
    <>
      <Layout />
      <StTitle src={logo} alt={logo}/>
      <Navibar />
      <StLine />
      
    </>
  );
}

export default Header;
