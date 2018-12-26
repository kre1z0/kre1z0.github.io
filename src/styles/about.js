import styled, { css } from "astroturf";

export const NewsContainer = styled("div")`
  width: 28.5714rem;
  height: 26rem;
  position: relative;
  @media (max-width: 768px) {
    width: 22.8571rem;
    height: 24.3571rem;
  }
  @media (max-width: 767px) {
    width: 19.4285rem;
    height: 15.9285rem;
  }
  @media (max-width: 480px) {
    width: calc(100vw - 1.7857rem * 2);
  }
  @media (max-height: 440px) {
    width: 24rem;
  }
  @media (max-height: 344px) {
    height: calc(100vh - 10rem);
    width: 54vw;
  }
`;

export const WillChangeNews = styled("div")`
  will-change: transform, opacity;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
`;

const styles = css`
  .aboutContainer {
    > section:first-child {
      z-index: 1;
      h1 {
        @media (max-width: 480px) {
          margin-bottom: 0.4rem;
        }
      }
    }
    > section:last-child {
      max-height: calc(100% - 4rem);
    }
    @media (max-width: 480px) {
      flex-direction: column;
      align-items: flex-start;
      > section:last-child {
        margin-bottom: 3.4rem;
      }
    }
    @media (max-height: 440px) {
      margin: 4.4rem auto 0 auto;
    }
  }
  .newBullets {
    @media (max-width: 480px) {
      bottom: -2rem;
    }
  }
  .isAboutSlide {
    will-change: transform;
    bottom: auto;
    right: auto;
    top: -13rem;
    left: 0;
    height: calc(100% + 26rem);
    @media (max-width: 1100px) {
      top: -20rem;
      left: -82rem;
      width: calc(100% + 100rem);
      height: calc(100% + 51rem);
    }
    @media (max-width: 480px) {
      top: -43rem;
      left: -84rem;
      width: calc(100% + 93rem);
      height: calc(100% + 79rem);
    }
  }
`;

export default styles;
