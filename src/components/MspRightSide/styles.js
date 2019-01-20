import styled, { css } from "astroturf";

export const LayersBlock = styled("div")`
  width: 100%;
  height: 100%;
  > img {
    width: 129%;
    max-width: none;
    &:first-child {
      opacity: 0;
    }
    &:not(:first-child) {
      opacity: 0;
      animation-fill-mode: forwards;
      position: absolute;
      top: 50%;
      left: -0.7vw;
      transform: translateY(-50%);
      height: auto;
      &:nth-child(3) {
        animation-duration: 400ms;
        animation-delay: 400ms;
      }
      &:nth-child(4) {
        animation-duration: 400ms;
        animation-delay: 800ms;
      }
      @media (max-width: 440px) {
        left: -1.46vw;
      }
    }
  }
`;

export const CardsBlock = styled("div")`
  top: 50.8%;
  transform: translateY(-50%);
  display: flex;
  left: 7.2%;
  width: 93.7%;
  height: 41%;
  position: absolute;
  align-items: flex-start;
  justify-content: space-between;
  img {
    width: 100%;
    height: auto;
    max-width: none;
  }
  @media (max-width: 440px) {
    height: calc(100vw / 2.18);
  }
`;

const Col = styled("div")`
  top: 4%;
  left: 1.4%;
  width: 36%;
  position: relative;
  height: 100%;
  > img {
    opacity: 0;
    animation-fill-mode: forwards;
    vertical-align: top;
    &:nth-child(1) {
      animation-delay: 1200ms;
    }
    &:nth-child(2) {
      animation-delay: 1400ms;
    }
    &:nth-child(3) {
      animation-delay: 1600ms;
    }
    &:nth-child(4) {
      animation-delay: 1800ms;
    }
  }
`;

export const LeftCol = styled(Col)``;

export const RightCol = styled(Col)`
  left: 0.68%;
  margin-top: -16.44%;
  display: flex;
  justify-content: flex-end;
  flex-direction: column-reverse;
`;

const styles = css`
  .fadeInSlideDown {
    animation-name: fadeInSlideDown;
    animation-duration: 200ms;
    animation-timing-function: ease-in;
    animation-iteration-count: 1;
    @keyframes fadeInSlideDown {
      from {
        opacity: 0;
        transform: translateY(50%);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  }
  .fadeInSlideUp {
    animation-name: fadeInSlideUp;
    animation-duration: 200ms;
    animation-timing-function: ease-in;
    animation-iteration-count: 1;
    @keyframes fadeInSlideUp {
      from {
        opacity: 0;
        transform: translateY(-50%);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  }
  .fakeLayer {
    opacity: 0;
  }
`;

export default styles;
