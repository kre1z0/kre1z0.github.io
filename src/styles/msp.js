import styled, { css } from "astroturf";

import { H3 } from "../components/Typography/Headlines";

export const MspLongreadContainer = styled("div")`
  h1 {
    margin-bottom: 3.5rem;
    @media (max-width: 991px) {
      margin-bottom: 2.5rem;
    }
    @media (max-width: 812px) and (orientation: landscape) {
      margin-bottom: 1.5rem;
    }
  }
`;

export const Step = styled(H3)`
  position: relative;
  margin-top: 4rem;
  margin-bottom: 2.4rem;
  > span {
    position: absolute;
    top: 0;
    left: 0;
    transform: translateY(-60%);
    color: rgba(38, 44, 55, 0.05);
    font-size: 4.5714rem;
  }
  @media (max-width: 991px) {
    margin-top: 4.6rem;
    margin-bottom: 2rem;
    > span {
      font-size: 4rem;
    }
  }
  @media (max-width: 812px) and (orientation: landscape) {
    margin-top: 3.4rem;
    margin-bottom: 1.4rem;
    > span {
      font-size: 2.8571rem;
    }
  }
  @media (max-width: 767px) and (orientation: portrait) {
    margin-top: 3.1rem;
    > span {
      font-size: 2.2857rem;
    }
  }
  &.withoutMarginTop {
    margin-top: 0;
  }
`;

const styles = css`
  .selectorSection {
    padding: 0 0 1rem 0;
    @media (max-height: 700px) and (min-width: 1200px) and (orientation: landscape) {
      margin-top: -1rem;
    }
  }
  .mspVideoWithControl {
    margin-bottom: 1.4rem;
    @media (max-height: 700px) and (min-width: 1200px) and (orientation: landscape) {
      max-height: calc(100vh - 17rem);
      max-height: calc(var(--vh, 1vh) * 100 - 17rem);
      video {
        max-height: calc(100vh - 17rem);
        max-height: calc(var(--vh, 1vh) * 100 - 17rem);
      }
    }
  }
  .selectorSectionScrollbar {
    :global .scroll-content {
      > div {
        display: flex;
      }
    }
  }
  .selectorContainer {
    margin: 0 auto;
    padding: 1.2rem 1.4285rem;
    @media (max-height: 700px) and (min-width: 1200px) and (orientation: landscape) {
      max-width: 64.2857rem;
      width: 100%;
      padding-left: 0;
    }
  }
  .analyticSection {
    display: flex;
    align-items: center;
    background-color: #ebf1f9;
    min-height: 32.9285rem;
    article {
      position: relative;
      max-width: 39.2857rem;
      > p {
        margin-bottom: 0;
      }
    }
    @media (max-width: 991px) {
      min-height: 31.7142rem;
    }
    @media (max-width: 650px) {
      min-height: 28rem;
      article {
        margin: 0;
        max-width: 25rem;
      }
    }
    @media (max-width: 767px) and (orientation: portrait) {
      max-width: 100vw;
      min-height: auto;
      padding-bottom: 6.5rem;
      article {
        padding: 0;
        max-width: none;
      }
    }
  }
  .calculateBusinessPlanRightNow {
    text-align: center;
    h2 {
      margin-top: 0;
    }
    a {
      font-size: 1.7142rem;
      @media (max-width: 991px) {
        font-size: 1.4285rem;
      }
      @media (max-width: 812px) and (orientation: landscape) {
        font-size: 1.2857rem;
      }
    }
    @media (max-width: 767px) and (orientation: portrait) {
      margin-top: 5rem;
    }
  }
  .headerLeftSide {
    @media (max-width: 767px) and (orientation: portrait) {
      p {
        display: none;
      }
    }
  }
`;

export default styles;
