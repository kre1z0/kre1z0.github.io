import styled from "astroturf";

export const Backend = styled("div")`
  will-change: background-color;
  top: 0;
  left: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 0.2857rem;
  transition: background-color 200ms ease, box-shadow 200ms ease;
  &:nth-child(2) {
    top: 1rem;
    height: calc(100% - 2rem);
    z-index: -2;
    left: 1rem;
  }

  &:nth-child(1) {
    top: 0.5rem;
    height: calc(100% - 1rem);
    z-index: -1;
    left: 0.5rem;
  }
`;
