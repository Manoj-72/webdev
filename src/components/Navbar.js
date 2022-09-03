import React from "react";
import styled from "styled-components";
import logo from "../images/logo-white.svg";

const NavContainer = styled.div`
  width: 100px;
  height: 100px;
  background-color: ${(props) => props.theme.colors.yellow};
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  img {
    width: 80px;
  }

  @media ${(props) => props.theme.mediaQueries.medium} {
    width: 171px;
    height: 171px;
  }
`;

const Navbar = () => {
  return (
    <NavContainer>
      <img src={logo} alt="builder" />
    </NavContainer>
  );
};

export default Navbar;
