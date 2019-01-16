import styled, { css } from "astroturf";

export const LayersBlock = styled("div")`
  width: 100%;
  height: 100%;
  > img {
    opacity: 0;
    animation-fill-mode: forwards;
    max-width: none;
    position: absolute;
    top: 50%;
    left: 61%;
    transform: translate(-50%, -50%);
    width: 122%;
    height: auto;
    &:nth-child(2) {
      animation-delay: 400ms;
    }
    &:nth-child(3) {
      animation-delay: 600ms;
    }
  }
`;

export const CardsBlock = styled("div")`
  top: calc(50% + 1vw);
  transform: translateY(-50%);
  left: 8.8%;
  display: flex;
  width: 44.4vw;
  height: calc(44.4vw / 1.77);
  position: absolute;
  align-items: flex-start;
  justify-content: space-between;
  img {
    width: 100%;
    height: auto;
    max-width: none;
  }
`;

const Col = styled("div")`
  height: 100%;
  > img {
    opacity: 0;
    animation-fill-mode: forwards;
    vertical-align: top;
    &:nth-child(1) {
      animation-delay: 800ms;
    }
    &:nth-child(2) {
      animation-delay: 1000ms;
    }
    &:nth-child(3) {
      animation-delay: 1200ms;
    }
    &:nth-child(4) {
      animation-delay: 1400ms;
    }
  }
`;

export const LeftCol = styled(Col)`
  width: 32%;
`;

export const RightCol = styled(Col)`
  width: 35%;
  position: relative;
  margin-top: -7.44vw;
  left: 0.28vw;
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
`;

export default styles;
