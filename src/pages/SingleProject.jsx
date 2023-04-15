import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { ContentWrapper, QUERIES } from "../../Constraints";
import { projectData } from "../data/projects";

const SingleProject = () => {
  const { id } = useParams();
  const project = projectData.projects.find(
    (p) => p.id === parseInt(id)
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <SingleProjectWrapper>
      <Header>
        <Heading>{project.name}</Heading>
        <Desc>{project.longDescription}</Desc>
      </Header>
      <InfoWrapper>
        <Stack>
          <SmallHeader>STACK</SmallHeader>
          <Tags>
            {project.tags.map((tag, i) => (
              <Tag key={i}>{tag}</Tag>
            ))}
          </Tags>
        </Stack>
        <LivePreview>
          <SmallHeader>LIVE</SmallHeader>
          <Live to={project.liveSite} target='_blank'>
            View Site
          </Live>
        </LivePreview>
      </InfoWrapper>
      <FeaturedImage
        src={project.featuredImage}
        alt={`${project.name} + image`}
      />

      {project.images?.map((img) => (
        <Content key={img.id}>
          <ContentImage src={img.screenShot} alt='' />
          <ContentDescription>{img.description}</ContentDescription>
        </Content>
      ))}
    </SingleProjectWrapper>
  );
};

const SingleProjectWrapper = styled(ContentWrapper)`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Header = styled.div``;

const Heading = styled.h1`
  margin-left: 5rem;
  margin-top: 3rem;
`;

const Desc = styled.p`
  margin-top: 4rem;
  margin-bottom: 4rem;
  color: ${(props) => props.theme.text};
`;

const InfoWrapper = styled.div`
  display: flex;
  gap: 8rem;
  margin-bottom: 5rem;
  @media ${QUERIES.phoneAndSmaller} {
    gap: 5rem;
  }
`;

const Stack = styled.div`
  text-align: center;
  font-size: 1.4rem;
`;

const Tags = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
const Tag = styled.li``;

const SmallHeader = styled.h5``;

const LivePreview = styled.div``;

const Live = styled(Link)`
  font-weight: bold;
  font-size: 1.2rem;
  color: ${(props) => props.theme.primary};
  &:hover {
    opacity: 0.9;
  }
`;

const FeaturedImage = styled.img`
  border-radius: 0.5rem;
`;

const Content = styled.div`
  margin-top: 5rem;
  display: grid;
  grid-template-columns: repeat(
    auto-fill,
    minmax(min(50rem, 100%), 1fr)
  );
  gap: 5.4rem;
  padding: 16px;
  align-items: center;
  &:nth-of-type(even) {
    direction: rtl;
  }
  @media ${QUERIES.phoneAndSmaller} {
    gap: 3rem;
  }
`;
const ContentImage = styled.img`
  border-radius: 0.5rem;
`;
const ContentDescription = styled.p`
  text-align: center;
`;

export default SingleProject;
