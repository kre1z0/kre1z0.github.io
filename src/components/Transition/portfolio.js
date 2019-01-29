import { css } from "astroturf";

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
  .fadeInSlideLeft {
    animation-name: fadeInSlideLeft;
    animation-duration: 200ms;
    animation-timing-function: ease-in;
    animation-iteration-count: 1;
    @keyframes fadeInSlideLeft {
      from {
        opacity: 0;
        transform: translateX(-50%);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }
  }
  .fadeInSlideRight {
    animation-name: fadeInSlideRight;
    animation-duration: 200ms;
    animation-timing-function: ease-in;
    animation-iteration-count: 1;
    @keyframes fadeInSlideRight {
      from {
        opacity: 0;
        transform: translateX(50%);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }
  }
  .fakeLayer {
    visibility: hidden;
  }
  .isVisible {
    opacity: 1 !important;
  }
`;

export default styles;