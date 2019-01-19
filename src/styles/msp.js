import styled, { css } from "astroturf";

import { H3 } from "../components/LongreadAtoms/Longread";

export const MspContainer = styled("div")``;

export const Step = styled(H3)`
  position: relative;
  margin-top: 5rem;
  > span {
    position: absolute;
    left: 0;
    bottom: 0;
    color: rgba(38, 44, 55, 0.05);
    font-size: 4.5714rem;
  }
`;

const styles = css`
  .selectorContainer {
    justify-content: center;
    margin-bottom: 1.2rem;
  }
`;

export default styles;
