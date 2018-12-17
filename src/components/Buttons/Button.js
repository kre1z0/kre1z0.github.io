import styled from "astroturf";

export const Button = styled("button")`
  padding: 0;
  user-select: none;
  cursor: pointer;
  outline: none;
  border: none;
  transition: all 200ms ease;
  &:focus {
    outline: none;
  }
`;
