import styled, { css } from "astroturf";

import { H3 } from "../components/LongreadAtoms/Longread";

export const MspContainer = styled("div")``;

export const Step = styled(H3)`
  position: relative;
  margin-top: 5rem;
  margin-bottom: 2.4rem;
  > span {
    position: absolute;
    left: 0;
    bottom: 0;
    color: rgba(38, 44, 55, 0.05);
    font-size: 4.5714rem;
  }
  @media (max-width: 768px) {
    margin-bottom: 2rem;
    > span {
      font-size: 4rem;
    }
  }
  @media (max-width: 576px) {
    margin-bottom: 1.4rem;
    > span {
      font-size: 2.8571rem;
    }
  }
  @media (max-width: 440px) {
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
    padding: 0;
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
  }
  .analyticSection {
    background-color: #ebf1f9;
    article {
      position: relative;
      max-width: 39.2857rem;
      @media (max-width: 650px) {
        margin: 0;
        max-width: 25rem;
        padding: 4.4rem 0;
        > p {
          margin-bottom: 0;
        }
      }
    }
    @media (max-width: 440px) {
      max-width: 100vw;
      article {
        padding: 0;
        max-width: none;
      }
    }
  }
`;

export default styles;
