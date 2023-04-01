import React from "react";
import styled from "styled-components";
import { QUERIES } from "../../Constraints";

const NotFound = () => {
  return <NotFoundWrapper>404 page not found</NotFoundWrapper>;
};

const NotFoundWrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.text};

  @media ${QUERIES.laptopAndSmaller} {
    background-color: green;
  }
  @media ${QUERIES.tabletAndSmaller} {
    background-color: black;
  }
  @media ${QUERIES.phoneAndSmaller} {
    background-color: red;
  }

  /* @media ${QUERIES.phoneAndSmaller} {
    background-color: red;
  } */
`;

export default NotFound;
