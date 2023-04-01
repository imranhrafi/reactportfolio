import React from "react";
import styled from "styled-components";

const Breadcrumbs = ({
  crumbs,
  fontSize,
  crumbColor,
  separatorColor,
  separator,
}) => {
  return (
    <BreadcrumbsContainer fontSize={fontSize}>
      {crumbs.map((crumb, index) => (
        <React.Fragment key={index}>
          {index > 0 && separator && (
            <Separator color={separatorColor}>{separator}</Separator>
          )}
          <Crumb
            marginRight={index < crumbs.length - 1 ? "10px" : 0}
            color={crumbColor}
          >
            {index < crumbs.length - 1 ? (
              <a href={`/${crumb}`}>{crumb}</a>
            ) : (
              <span>{crumb}</span>
            )}
          </Crumb>
        </React.Fragment>
      ))}
    </BreadcrumbsContainer>
  );
};

const BreadcrumbsContainer = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
  font-size: ${(props) => props.fontSize || "16px"};
`;

const Crumb = styled.li`
  margin-right: ${(props) => props.marginRight || "10px"};
  &:last-child {
    margin-right: 0;
  }
  & > a {
    text-decoration: none;
    color: ${(props) => props.color || "inherit"};
    &:hover {
      text-decoration: underline;
    }
  }
`;

const Separator = styled.span`
  margin: 0 5px;
  color: ${(props) => props.color || "inherit"};
`;
export default Breadcrumbs;
