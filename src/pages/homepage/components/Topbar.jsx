import React from "react";
import styled from "styled-components";
import {
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineGithub,
} from "react-icons/Ai";

const Topbar = () => {
  return (
    <TopbarWrapper>
      <Instagram />
      <Github />
      <LinkedIn />
    </TopbarWrapper>
  );
};

const TopbarWrapper = styled.div`
  font-size: 3rem;
  position: relative;
  color: ${(props) => props.theme.gray[700]};
  margin-top: 1.5rem;
  z-index: 2;
  display: flex;
  gap: 2rem;

  &::before {
    content: "";
    display: inline-block;

    width: calc(min(25rem, 100% - 6rem));
    min-width: 150px;
    height: 0.2rem;
    background-color: #999999;
    margin-top: 1.2rem;
  }
`;

const Instagram = styled(AiOutlineInstagram)`
  cursor: pointer;
`;

const Github = styled(AiOutlineGithub)`
  cursor: pointer;
`;

const LinkedIn = styled(AiOutlineLinkedin)`
  cursor: pointer;
`;

export default Topbar;
