import styled, { css } from "astroturf";

export const GeomonitoringContainer = styled("div")``;

const styles = css`
  .headerRightSide {
    @media (max-width: 767px) and (orientation: portrait) and (max-height: 524px) {
      flex-shrink: 1;
      flex-grow: 1;
    }
  }
  .headerLeftSide {
    padding-right: 1rem;
    max-width: 34rem;
    p {
      display: block;
      margin-bottom: 0;
    }
    @media (max-width: 767px) and (orientation: portrait) and (max-height: 524px) {
      p {
        margin-bottom: 2rem;
      }
    }
  }
`;

export default styles;
