import styled from "astroturf";

export const Container = styled("div")`
  position: relative;
  z-index: 8;
  video {
    z-index: -1;
    border-radius: 0.2857rem;
    top: 4.4%;
    right: 8.5%;
    position: absolute;
    max-height: calc(80vh);
    max-height: calc(var(--vh, 1vh) * 80);
  }
`;

export const MockUp = styled("img")`
  position: relative;
  width: auto;
  height: 100%;
  max-height: 93.5vh;
  max-height: calc(var(--vh, 1vh) * 93.5);
`;
