import styled from "astroturf";

export const Button = styled("button")`
  cursor: pointer;
  padding: 0.4rem 0.8rem;
  font-weight: 600;
  color: #262c37;
  background-color: transparent;
  outline: none;
  border: 2px solid rgba(144, 197, 61, 0.5);
  border-radius: 1.2857rem;
  transition: all 200ms ease;
  &.primary {
    color: #fff;
    background-color: #90c53d;
  }
`;
