import React from "react";
import styled from "styled-components";
import Topbar from "./components/Topbar";
import { ContentWrapper, QUERIES } from "../../../Constraints";
import { FaQuoteLeft } from "/node_modules/react-icons/fa";
import rafi from "../../assets/rafi.jpg";
import Flag from "../../components/Flag";

const HomePage = () => {
  return (
    <HomePageWrapper>
      <Topbar />
      <LeftQuote />
      <Content>
        <Heading>
          Hey, there! Using React.js, I create visually stunning
          interfaces <span>that bring your ideas to life.</span>
        </Heading>
        <StoryWrapper>
          <TextRight align='right'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Amet ea omnis consectetur dolore. Inventore, ipsa.
            Blanditiis quam eaque laborum adipisci.
          </TextRight>
          <ImageWrapper>
            {/* <PotraitImage src={rafi} alt='photo of rafi' /> */}
          </ImageWrapper>
          <TextLeft align='left'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dolorem porro pariatur sunt enim voluptas similique
            perferendis accusantium magni doloribus explicabo.
          </TextLeft>
        </StoryWrapper>
        {/* <WaveImage src={wave} alt='wave background image' /> */}
        {/* <Flag /> */}
      </Content>
    </HomePageWrapper>
  );
};

const HomePageWrapper = styled(ContentWrapper)`
  min-height: 100vh;
  padding-top: 4rem;
  padding-right: 1rem;
  padding-left: 1rem;
  position: relative;
  background-color: ${(props) => props.theme.background};
  flex-direction: column;
  align-items: start;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 15rem;
`;

const Heading = styled.h1`
  margin-bottom: auto;
  margin-left: clamp(4rem, 4vw, 4.8rem);
  color: ${(props) => props.theme.text};

  span {
    font-weight: bold;
    color: ${(props) => props.theme.primary};
    @media ${QUERIES.phoneAndSmaller} {
      display: block;
    }
  }
`;

const StoryWrapper = styled.div`
  margin-top: 6rem;
  margin-bottom: 6rem;
  display: flex;
  gap: 15px;
  padding: 16px;
  justify-content: center;
  align-items: center;
  @media ${QUERIES.phoneAndSmaller} {
    flex-direction: column;
  }
`;

const ImageWrapper = styled.div`
  min-width: 30rem;
  width: 30rem;
  height: 30rem;
  border-radius: 50%;
  overflow: hidden;
  background-image: url(${rafi});
  background-size: cover;
  background-position: center;
`;

const PotraitImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  margin-top: 5rem;
`;

const TextRight = styled.p`
  text-align: right;
  @media ${QUERIES.phoneAndSmaller} {
    text-align: center;
  }
`;
const TextLeft = styled.p`
  text-align: left;
  @media ${QUERIES.phoneAndSmaller} {
    text-align: center;
  }
`;

const WaveImage = styled.img`
  position: absolute;
  top: 0;
  right: 0;
`;

const LeftQuote = styled(FaQuoteLeft)`
  position: absolute;
  font-size: 20rem;
  top: 4.5rem;
  opacity: 0.8;
  color: ${(props) => props.theme.gray[100]};
`;

export default HomePage;
