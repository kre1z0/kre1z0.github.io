import { css } from "astroturf";

const styles = css`
  .portfolioContainer {
    > section:last-child {
      width: 100%;
      max-width: 42.1428rem;
      max-height: 51.1428rem;
      height: calc(100% - 4rem);
      > div {
        width: 100%;
        height: 100%;
        > div {
          width: 100%;
          height: 100%;
        }
      }
      @media all and (max-height: 777px), (max-width: 1144px) {
        max-width: 32.1428rem;
        max-height: 33.7857rem;
      }
      @media all and (max-height: 600px), (max-width: 1000px) {
        max-width: 26.2857rem;
        max-height: 30.4857rem;
      }
      @media (max-width: 767px) {
        max-width: 48vw;
        max-height: 14.3571rem;
      }
      @media (max-width: 840px) and (orientation: landscape) {
        max-width: 48vw;
        max-height: 14.3571rem;
      }
      @media (max-width: 480px) {
        left: 1.7857rem;
        position: absolute;
        width: calc(100vw - 1.7857rem * 2);
        max-width: none;
        max-height: 16.0714rem;
        bottom: 2.8571rem;
      }
    }
  }
  .portfolioLeftSide {
    @media (max-width: 767px) {
      width: 100%;
      height: 100%;
      align-self: flex-end;
      > div {
        width: 100%;
      }
    }
    @media (max-width: 840px) and (orientation: landscape) {
      > div {
        width: 100%;
        > menu {
          display: none !important;
        }
      }
    }
  }
`;

export default styles;
