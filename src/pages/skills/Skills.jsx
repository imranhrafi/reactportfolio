import React from "react";
import styled from "styled-components";
import {
  ContentWrapper,
  QUERIES,
  SHADOWS,
} from "../../../Constraints";
import { skillData } from "../../data/skills";
import {
  FaReact,
  FaRegGem,
  FaCss3Alt,
  FaGitAlt,
} from "react-icons/fa";

const renderIcon = (iconName) => {
  switch (iconName) {
    case "FaReact":
      return <FaReact />;
    case "FaRegGem":
      return <FaRegGem />;
    case "FaCss3Alt":
      return <FaCss3Alt />;
    case "FaGitAlt":
      return <FaGitAlt />;
    default:
      return null;
  }
};
const Skills = () => {
  return (
    <SkillsWrapper>
      <Heading>Skills</Heading>
      <Moto>
        As a front-end web developer, I have a strong grasp of web
        development concepts and have invested considerable time
        applying these concepts to practical, real-world applications.
        My dedication to honing my skills has equipped me with the
        knowledge and expertise necessary to deliver optimal results
        in my work.
      </Moto>

      <Expertise>
        {skillData.skills.map(({ name, description, icon, id }) => (
          <Card key={id}>
            <CardHeader>
              <Icon>{renderIcon(icon)}</Icon>
              <CardHeading>{name}</CardHeading>
            </CardHeader>
            <CardBody>
              <CardDesc>{description}</CardDesc>
            </CardBody>
          </Card>
        ))}
      </Expertise>
    </SkillsWrapper>
  );
};

const SkillsWrapper = styled(ContentWrapper)`
  flex-direction: column;
  padding: 2rem;
  margin-top: 3rem;
`;

const Heading = styled.h2``;

const Moto = styled.p`
  width: 50%;
  margin-top: 6rem;
  margin-bottom: 6rem;
  @media ${QUERIES.tabletAndSmaller} {
    width: 90%;
  }
  @media ${QUERIES.phoneAndSmaller} {
    width: 100%;
  }
  /* color: ${(props) => props.theme.text}; */
`;

const Expertise = styled.div`
  --grid-column-width: min(320px, 100%);
  display: grid;
  justify-content: center;
  align-items: center;
  margin: auto;
  grid-template-columns: repeat(
    auto-fill,
    minmax(var(--grid-column-width), 1fr)
  );
  gap: 15px;
  padding: 16px;
`;

const Card = styled.ul`
  min-width: 320px;
  padding: 3rem;
  padding-right: 1rem;
  height: 33rem;
  border: 2px solid ${(props) => props.theme.gray[300]};
  box-shadow: ${(props) => props.theme.shadows.large};
  border-radius: 0.3rem;

  &:hover {
    box-shadow: ${(props) => props.theme.shadows.large};
  }
`;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  font-size: 4rem;
`;
const Icon = styled.div``;

const CardHeading = styled.li`
  width: max-content;
  word-wrap: break-word;
  position: relative;
  z-index: 0;
  &::after {
    position: absolute;
    content: "";
    bottom: 15%;
    left: 0;
    width: 100%;
    height: 1rem;
    background-color: ${(props) => props.theme.primary};
    z-index: -1;
  }
`;
const CardBody = styled.div`
  margin-left: 3rem;
  margin-top: 3rem;
  position: relative;
  padding-top: 4rem;
  padding-bottom: 4rem;
  &::before {
    content: "h3";
    position: absolute;
    top: 0%;
    left: -4rem;
    color: ${(props) => props.theme.primary};
  }
  &::after {
    content: "h3";
    position: absolute;
    bottom: 0%;
    left: -4rem;
    color: ${(props) => props.theme.primary};
  }
`;

const CardDesc = styled.li`
  position: relative;
  &::before {
    position: absolute;
    top: 0;
    left: -3rem;
    content: "";
    width: 1px;
    height: 100%;
    background-color: ${(props) => props.theme.gray[500]};
  }
`;

export default Skills;
