import styled, { css } from "astroturf";

export const NewsContainer = styled("div")`
  width: 28.5714rem;
  height: 26rem;
  position: relative;
  @media (max-width: 768px) {
    width: 22.8571rem;
    height: 24.3571rem;
  }
  @media (max-width: 576px) {
    width: 19.4285rem;
    height: 15.9285rem;
  }
  @media (max-width: 414px) {
    width: calc(100vw - 1.7857rem * 2);
  }
`;

const styles = css`
  .aboutContainer {
    > section:first-child {
      h1 {
        @media (max-width: 414px) {
          margin-bottom: 0.4rem;
        }
      }
    }
    > section:last-child {
      max-height: calc(100% - 4rem);
    }
    @media (max-width: 414px) {
      flex-direction: column;
      align-items: flex-start;
      > section:last-child {
        margin-bottom: 1.4rem;
      }
    }
  }
  .newBullets {
    @media (max-width: 414px) {
      bottom: -1.4rem;
    }
  }
  .isAboutSlide {
    will-change: transform;
    bottom: auto;
    right: auto;
    top: -13rem;
    left: 0;
    height: calc(100% + 26rem);
  }
`;

export default styles;
