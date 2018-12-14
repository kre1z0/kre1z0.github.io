import styled from "astroturf";

export const Button = styled("button")`
  cursor: pointer;
  outline: none;
  transition: all 200ms ease;
  &:focus {
    outline: none;
  }
`;
