import styled from "styled-components";

export const BREAKPOINTS = {
  phone: 576,
  tablet: 768,
  laptop: 992,
  desktop: 1200,
};

const toRem = (size) => `${size / 10}rem`;

export const QUERIES = {
  phoneAndSmaller: `(max-width: ${toRem(BREAKPOINTS.phone)})`,
  tabletAndSmaller: `(max-width: ${toRem(BREAKPOINTS.tablet)})`,
  laptopAndSmaller: `(max-width: ${toRem(BREAKPOINTS.laptop)})`,
  desktopAndSmaller: `(max-width: ${toRem(BREAKPOINTS.desktop)})`,
};

export const SHADOWS = {
  small: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
  medium:
    "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
  large:
    "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
};

export const ContentWrapper = styled.div`
  width: min(1400px, 100%);

  margin: auto;
`;
