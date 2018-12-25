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
  @media (max-height: 440px) {
    width: 24rem;
    max-height: 65vh;
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
      h1 {
        @media (max-width: 414px) {
          margin-bottom: 0.4rem;
        }
      }
    }
    > section:last-child {
      max-height: calc(100% - 4rem);
      @media (max-height: 440px) {
        align-self: flex-start;
      }
    }
    @media (max-width: 414px) {
      flex-direction: column;
      align-items: flex-start;
      > section:last-child {
        margin-bottom: 1.4rem;
      }
    }
    @media (max-height: 440px) {
      margin: 4.4rem auto 0 auto;
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
    @media (max-width: 1100px) {
      top: -20rem;
      left: -82rem;
      width: calc(100% + 100rem);
      height: calc(100% + 51rem);
    }
    @media (max-width: 414px) {
      top: -43rem;
      left: -84rem;
      width: calc(100% + 93rem);
      height: calc(100% + 79rem);
    }
  }
`;

export default styles;
