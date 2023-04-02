import React from "react";
import {
  AiOutlineArrowRight,
  AiOutlineFundProjectionScreen,
} from "/node_modules/react-icons/ai";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ContentWrapper, QUERIES } from "../../../Constraints";
import { projectData } from "../../data/projects";

const Projects = () => {
  return (
    <ProjectWrapper>
      <Title>What I've working on</Title>
      <Moto>
        I like to stay busy and always have a project in the works,
        Take a look at some of the applications. articles, and
        companies I've dedicated my time to.
      </Moto>
      <CardContainer>
        {projectData.projects.map((data) => {
          return (
            <ProjectList key={data.id}>
              <Link to={`/projects/${data.id}`}>
                <Image src={data.featuredImage} alt={data.name} />
              </Link>
              <ProjectName>{data.name}</ProjectName>
              <Description>{data.shortDescription}</Description>
              <TagList>
                {data.tags?.map((tag, i) => (
                  <Tag key={i}>{tag}</Tag>
                ))}
              </TagList>

              <Button to={`/projects/${data.id}`}>
                View Project
                <ArrowRight />
              </Button>
            </ProjectList>
          );
        })}
      </CardContainer>
    </ProjectWrapper>
  );
};

const ProjectWrapper = styled(ContentWrapper)`
  margin-top: 21rem;
  padding: 2rem;
`;

const Title = styled.h1``;

const Moto = styled.p`
  margin-top: 8rem;
  margin-bottom: 5rem;
  width: 50%;
  @media ${QUERIES.tabletAndSmaller} {
    width: 90%;
  }
  @media ${QUERIES.phoneAndSmaller} {
    width: 100%;
  }
`;

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: clamp(10%, 4vw, 5%);

  @media ${QUERIES.phoneAndSmaller} {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    gap: 1rem;
  }
`;

const ProjectList = styled.div`
  /* flex: 1 1 40%; */
  /* margin-bottom: 15rem; */
  height: 61rem;
`;

const Image = styled.img`
  width: 100%;
  max-height: 37rem;
  height: 37rem;
  object-fit: cover;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
`;

const ProjectName = styled.h1``;

const Description = styled.p`
  margin-bottom: 1.5rem;
  margin-top: 1.5rem;
`;

const TagList = styled.ul`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Tag = styled.li`
  display: grid;
  place-content: center;
  margin-bottom: 1.5rem;
  width: max-content;
  font-size: 1.2rem;
  padding-left: 0.3rem;
  padding-right: 0.3rem;
  border-radius: 0.2rem;
  color: ${(props) => props.theme.gray[700]};
  background-color: ${(props) => props.theme.gray[100]};
  border: 1px solid ${(props) => props.theme.gray[100]};
`;

const Button = styled(Link)`
  width: max-content;
  display: flex;
  align-items: center;
  gap: 1rem;
  color: ${(props) => props.theme.primary};
  padding: 0.5rem;
  cursor: pointer;
  position: relative;
  margin-top: auto;
  z-index: 2;
  border-radius: 0.2rem;
  overflow: hidden;
  &::after {
    content: "";
    width: 100%;
    height: 0rem;
    background-color: ${(props) => props.theme.primary};
    position: absolute;
    bottom: 0;
    left: 0;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    z-index: -1;
  }

  &:hover::after {
    opacity: 1;
    height: 100%;
  }
  &:hover {
    color: ${(props) => props.theme.alterText};
  }
`;

const ArrowRight = styled(AiOutlineArrowRight)``;

export default Projects;
