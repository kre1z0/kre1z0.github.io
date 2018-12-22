import styled, { css } from "astroturf";

export const MobileTitle = styled("h1")`
  color: #262c37;
  font-size: 1.2857rem;
  position: absolute;
  margin: 0;
  top: 0;
  transform: translateY(-100%);
  @media (max-width: 320px) {
    top: auto;
    bottom: 26.4rem;
    transform: translateY(0);
  }
`;

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
      @media all and (max-height: 600px), (max-width: 768px) {
        max-width: 26.2857rem;
        max-height: 33.7857rem;
      }
      @media (max-width: 576px) {
        max-width: 48vw;
        max-height: 14.3571rem;
      }
      @media (max-width: 320px) {
        left: 1.7857rem;
        position: absolute;
        width: 19.2857rem;
        max-width: none;
        max-height: 16.0714rem;
        bottom: 2.8571rem;
      }
    }
  }
  .portfolioLeftSide {
    @media screen and (max-width: 576px) and (min-width: 321px) {
      width: 100%;
      height: 100%;
      max-width: 48vw;
      max-height: 14.3571rem;
      > div {
        width: 100%;
        height: 100%;
      }
    }
    @media (max-width: 320px) {
      align-self: flex-end;
    }
  }
`;

export default styles;
