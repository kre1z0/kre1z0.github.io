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
`;

const styles = css`
  .selectorContainer {
    justify-content: center;
    padding: 1.2rem 0;
  }
  .analyticSection {
    background-color: #ebf1f9;
  }
  .selectorSection {
    padding: 0;
  }
`;

export default styles;
