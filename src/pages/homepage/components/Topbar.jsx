import React from "react";
import styled from "styled-components";
import {
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineGithub,
} from "/node_modules/react-icons/ai";
import { Link } from "react-router-dom";

const Topbar = () => {
  return (
    <TopbarWrapper>
      <Link>
        <Instagram />
      </Link>
      <Link>
        <Github />
      </Link>
      <Link>
        <LinkedIn />
      </Link>
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
    background-color: ${(props) => props.theme.gray[500]};
    margin-top: 1.2rem;
  }
`;


const Instagram = styled(AiOutlineInstagram)`
  font-size: 3rem;
  cursor: pointer;
`;

const Github = styled(AiOutlineGithub)`
  font-size: 3rem;
  cursor: pointer;
`;

const LinkedIn = styled(AiOutlineLinkedin)`
  font-size: 3rem;
  cursor: pointer;
`;

export default Topbar;
