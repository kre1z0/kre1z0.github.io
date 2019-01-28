import styled from "astroturf";

export const Container = styled("div")`
  position: relative;
  video {
    border-radius: 0.2857rem;
    top: 4.4%;
    right: 8.5%;
    position: absolute;
    z-index: -1;
    max-height: calc(80vh);
    max-height: calc(var(--vh, 1vh) * 80);
  }
  &:before {
    border-radius: 0.2857rem;
    top: 4%;
    right: 8.5%;
    content: "";
    position: absolute;
    height: 85%;
    width: 76%;
    background-color: rgb(224, 240, 246);
    z-index: -1;
  }
`;

export const MockUp = styled("img")`
  width: auto;
  height: 100%;
  z-index: 8;
  max-height: 93.5vh;
  max-height: calc(var(--vh, 1vh) * 93.5);
`;
