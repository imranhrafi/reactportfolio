import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { navbarData } from "../../../data/navbar";

// Custom animated list item component
function AnimatedListItem({ delay, children }) {
  return (
    <motion.li
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: delay }}
      exit={{ opacity: 0, y: -10 }}
      whileHover={{
        scale: 1.1,
        scaleX: 0.9,
        transition: { duration: 0.2 },
      }}
      whileTap={{
        scale: 1,
        scaleX: 0.9,
        transition: { duration: 0.2 },
      }}
    >
      {children}
    </motion.li>
  );
}

// Main nav list component
function NavList({ showLinks, setShowLinks, handleClick }) {
  // Show the links on initial render
  useEffect(() => {
    setShowLinks(true);
  }, []);

  return (
    <AnimatePresence>
      {/* <CheckOverflow /> */}
      {/* Only render the list if showLinks is true */}
      {showLinks && (
        <AnimateWrapper
          showLinks={showLinks}
          initial={{ width: 0 }}
          animate={{ width: "100vw", transition: { duration: 0.5 } }}
          exit={{ width: 0, transition: { duration: 0.5 } }}
        >
          <List>
            {/* Map over the nav data and render an AnimatedListItem for each item */}
            {navbarData.navbar.map(({ name, router, id }) => (
              <AnimatedListItem delay={id * 0.2} key={id}>
                <Anchor to={router} onClick={handleClick}>
                  {name}
                </Anchor>
              </AnimatedListItem>
            ))}
          </List>
        </AnimateWrapper>
      )}
    </AnimatePresence>
  );
}

// Styled components
const AnimateWrapper = styled.div`
  --width: min(135rem, 100%);
  width: ${(props) => (props.showLinks ? "100vw" : "0")};
  height: 100vh;
  margin: auto;
  display: flex;
  position: absolute;
  top: 10rem;
  left: 0;
  z-index: 12;
  background-color: ${(props) => props.theme.background};
`;

const List = styled.ul`
  justify-self: start;
  margin: auto;
  padding-left: 4rem;
  opacity: 1;

  &:hover > li > a {
    opacity: 0.5;
    text-decoration: line-through;
  }

  &:hover > li > a:hover {
    opacity: 1;
    text-decoration: none;
  }
`;

const Anchor = styled(NavLink)`
  font-size: 5rem;
  color: ${(props) => props.theme.text};
`;

export default NavList;
