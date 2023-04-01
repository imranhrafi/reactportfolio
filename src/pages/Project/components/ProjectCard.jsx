import React from "react";
import styled from "styled-components";
import { QUERIES } from "../../../../Constraints";
import { projectData } from "../../../data/projects";

const ProjectCard = () => {
  return <ProjectCardWrapper></ProjectCardWrapper>;
};

const ProjectCardWrapper = styled.div`
  width: 5rem;
  height: 3rem;
  z-index: 100;
  @media ${QUERIES.phoneAndSmaller} {
    background-color: red;
  }
`;

const Project = styled.div`
  width: 140rem;
`;

const Image = styled.img``;

const ProjectName = styled.h1``;

const Description = styled.p``;

const TagList = styled.p``;

export default ProjectCard;
