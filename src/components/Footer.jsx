import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ContentWrapper, QUERIES } from "../../Constraints";

const Footer = () => {
  return (
    <FooterWrapper>
      <Title>Let's Build Something Together</Title>
      <Moto>
        Feel free to reach out if you're looking for a developer,{" "}
        <br />
        have a question, or just want to connect.
      </Moto>
      <Email href='mailto:imranhrafi@gmail.com'>
        imranhrafi@gmail.com
      </Email>
      <Contact>
        <SocialLink>Messenger</SocialLink>
        <SocialLink>LinkedIn</SocialLink>
        <SocialLink>Instagram</SocialLink>
        <SocialLink>Github</SocialLink>
      </Contact>
    </FooterWrapper>
  );
};

const FooterWrapper = styled(ContentWrapper)`
  margin-top: 15rem;
  padding-bottom: 10rem;
  padding: 2rem;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.primary};

  @media ${QUERIES.phoneAndSmaller} {
    margin-top: 10rem;
  }
`;

const Title = styled.h1`
  @media ${QUERIES.phoneAndSmaller} {
    font-size: 5.4rem;
  }
`;

const Moto = styled.p`
  margin-top: 4rem;
  margin-bottom: 4rem;
  text-align: center;
  color: ${(props) => props.theme.text};
`;

const Email = styled.a`
  color: ${(props) => props.theme.text};
  width: max-content;
  border-bottom: 3px solid ${(props) => props.theme.text};
  font-weight: bold;
  transition: all 400ms ease;
  &:hover {
    color: ${(props) => props.theme.alterText};
    border-bottom: 3px solid ${(props) => props.theme.alterText};
  }
`;

const Contact = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  margin-top: 2rem;
`;

const SocialLink = styled(Link)`
  color: ${(props) => props.theme.text};
  &:hover {
    font-weight: bold;
    color: ${(props) => props.theme.alterText};
  }
`;

export default Footer;
