import styled from "astroturf";

export const LayersBlock = styled("section")`
  position: relative;
  width: 100%;
  height: 100%;
  > img {
    top: 0;
    left: 0;
    position: absolute;
    opacity: 0;
    transition-duration: 400ms;
    transition-property: opacity, transform, top;
    will-change: opacity, transform, top;
    transition-timing-function: ease-in;
    &:first-child {
      position: static;
      top: auto;
      left: auto;
    }
    &:nth-child(n + 3):nth-child(-n + 7) {
      transform: translateY(40%);
      transition-delay: 400ms;
    }
    &:nth-child(4) {
      top: 5%;
    }
    &:nth-child(5) {
      top: 10%;
    }
    &:nth-child(6) {
      top: 15%;
    }
    &:nth-child(7) {
      top: 20%;
    }
    &:nth-child(8) {
      transition-delay: 1s;
    }
    &:nth-child(9) {
      transition-delay: 1s;
    }
  }
  &.animate {
    > img {
      opacity: 1;
      &:nth-child(n + 3):nth-child(-n + 7) {
        transform: translateY(0);
      }
    }
  }
  &.slide {
    > img {
      transition-duration: 400ms;
      transition-timing-function: ease-out;
      top: 0;
      &:nth-child(n + 3):nth-child(-n + 7) {
        transition-delay: 0ms;
      }
    }
  }
`;
