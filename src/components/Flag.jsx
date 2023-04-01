import React from "react";
import { createRoutesFromElements } from "react-router-dom";
import styled, { keyframes } from "styled-components";

const Flag = () => {
  function generateDivs(count, tagName) {
    const divArray = [];
    for (let i = 0; i < count; i++) {
      divArray.push(React.createElement(tagName, { key: i }));
    }
    return divArray;
  }

  const greenSquare = generateDivs(1368, Green);

  const redSquare = generateDivs(500, Red);

  return (
    <FlagWrapper>
      <Wrapper>
        <GreenArea>{greenSquare}</GreenArea>
        <RedCircle>{redSquare}</RedCircle>
      </Wrapper>
    </FlagWrapper>
  );
};

const FlagWrapper = styled.div`
  position: relative;
`;
const wave = keyframes`
  0% {
    transform: scale(1.2);
  }
  50% {
    transform: scale(1.3);
  }
  100% {
    transform: scale(1);
  }
`;

const Wrapper = styled.div`
  max-width: 40rem;
  max-height: 20rem;
  position: relative;
  margin: auto;
  cursor: grab;
`;

const GreenArea = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.1rem;
`;

const Green = styled.div`
  width: 0.6rem;
  height: 0.6rem;
  border-radius: 50%;
  background-color: green;
  overflow: hidden;
  animation: ${wave} 2s ease-in-out infinite forwards;
`;

const RedCircle = styled.div`
  max-width: 10rem;
  max-height: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.1rem;
  border-radius: 50%;
  overflow: hidden;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
`;

const Red = styled.div`
  width: 0.6rem;
  height: 0.6rem;
  border-radius: 50%;
  overflow: hidden;
  background-color: red;
  animation: ${wave} 2s ease-in-out infinite forwards;

  &:hover {
    scale: 1.5;
  }
`;

export default Flag;
