import React, { useState } from "react";
import styled from "styled-components";
import { ContentWrapper } from "../../../Constraints";
import NavList from "./components/NavList";
import {
  AiOutlineMenuFold,
  AiOutlineMenuUnfold,
} from "/node_modules/react-icons/ai";
import {
  BsFillSunFill,
  BsFillMoonStarsFill,
} from "/node_modules/react-icons/bs";
import { Link } from "react-router-dom";

const Navbar = ({ toggleTheme, currentTheme }) => {
  const [showLinks, setShowLinks] = useState(false);

  const handleClick = () => {
    setShowLinks(!showLinks);
  };
  return (
    <NavbarWrapper>
      {showLinks && (
        <NavList
          handleClick={handleClick}
          showLinks={showLinks}
          setShowLinks={setShowLinks}
        />
      )}
      <Hamburger onClick={handleClick}>
        {showLinks ? <AiOutlineMenuFold /> : <AiOutlineMenuUnfold />}
      </Hamburger>
      <LogoWrapper to='/' onClick={() => setShowLinks(false)}>
        <Slicer>Rafi.</Slicer>
      </LogoWrapper>

      <ThemeSwitcher onClick={toggleTheme}>
        {currentTheme == "light" ? (
          <BsFillMoonStarsFill />
        ) : (
          <BsFillSunFill />
        )}
      </ThemeSwitcher>
    </NavbarWrapper>
  );
};

const NavbarWrapper = styled(ContentWrapper)`
  height: 4rem;
  padding: 5rem;
  display: flex;
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.background};
  justify-content: center;
  align-items: center;
`;

const Hamburger = styled.div`
  margin-right: 1rem;
  margin-top: 1rem;
  font-size: 3rem;
  color: ${(props) => props.theme.text};
  cursor: pointer;
`;

const LogoWrapper = styled(Link)`
  margin-right: auto;
  cursor: pointer;
  user-select: none;
`;

const Slicer = styled.h1`
  width: 100%;
  font-size: 4rem;
  padding: 1rem;
  color: ${(props) => props.theme.text};
  font-weight: bold;
`;

const ThemeSwitcher = styled.h1`
  cursor: pointer;
  user-select: none;
  padding: 0.5rem;
  font-size: 3rem;
`;

export default Navbar;
