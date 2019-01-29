import styled from "astroturf";

export const LayersBlock = styled("div")`
  width: 100%;
  height: 100%;
  > img {
    display: block;
    width: 129%;
    max-width: none;
    opacity: 0;
    animation-fill-mode: forwards;
    height: auto;
    left: -12%;
    &:first-child {
      position: relative;
    }
    &:not(:first-child) {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      animation-duration: 400ms;
      &:nth-child(2) {
        transition: opacity 400ms ease-in;
      }
      &:nth-child(3) {
        animation-delay: 400ms;
      }
      @media (max-width: 767px) and (orientation: portrait) {
        width: 124%;
        left: -9%;
      }
    }
  }
`;

export const CardsBlock = styled("div")`
  top: 48.4%;
  transform: translateY(-50%);
  left: -0.4%;
  width: 101%;
  height: 42%;
  position: absolute;
  img {
    position: absolute;
    height: auto;
    animation-delay: 800ms;
    opacity: 0;
    animation-fill-mode: forwards;
    &:nth-child(1) {
      width: 28%;
      top: 11%;
      left: -6%;
    }
    &:nth-child(2) {
      top: 2%;
      width: 34%;
      right: -4%;
    }
    &:nth-child(3) {
      left: 0;
      bottom: -19%;
    }
  }
  @media (max-width: 767px) and (orientation: portrait) {
    top: 50%;
    left: 2.6%;
    width: 97%;
    height: calc(100vw / 2.2);
    img {
      &:nth-child(3) {
        bottom: -16%;
      }
    }
  }
`;
