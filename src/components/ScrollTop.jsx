import React, { useState, useEffect } from "react";
import { VscChevronUp } from "react-icons/Vsc";
import styled from "styled-components";

import { ContentWrapper } from "../../Constraints";

const ScrollToTop = () => {
  const [showScrollTopButton, setShowScrollTopButton] =
    useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setShowScrollTopButton(true);
      } else {
        setShowScrollTopButton(false);
      }
    });
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div>
      <ContentWrapper>
        {showScrollTopButton && (
          <ScrollToTopBtn onClick={scrollTop} />
        )}
      </ContentWrapper>
    </div>
  );
};

const ScrollToTopBtn = styled(VscChevronUp)`
  position: fixed;
  bottom: 15px;
  right: 20px;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  border: 2px solid ${(props) => props.theme.primary};
  background-color: ${(props) => props.theme.alterText};
  color: #333;
  cursor: pointer;
  &:hover {
    animation: none;
    background-color: ${(props) => props.theme.primary};
    color: ${(props) => props.theme.alterText};
    border: 2px solid #fff;
  }
`;

export default ScrollToTop;
