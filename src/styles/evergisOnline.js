import styled, { css } from "astroturf";

export const EvergisOnlineContainer = styled("div")``;

export const FiguresTitle = styled("h4")`
  margin: 4rem 0 4.8rem 0;
  font-size: 1.1428rem;
  font-weight: 600;
  line-height: 1.5;
  @media (max-width: 767px) {
    font-size: 0.8571rem;
  }
`;

const styles = css`
  .mainTitle {
    margin-bottom: 7rem;
  }
  .sectionWithScreenshots {
    p {
      margin-bottom: 9rem;
      @media (max-width: 1199px) {
        margin-bottom: 5rem;
      }
      @media (max-width: 991px) {
        margin-bottom: 4rem;
      }
      @media (max-width: 991px) {
        margin-bottom: 4rem;
      }
      @media (max-width: 767px) and (orientation: landscape) {
        margin-bottom: 3rem;
      }
      @media (max-width: 767px) and (orientation: portrait) {
        margin-bottom: 2rem;
      }
    }
  }
  .headerLeftSide {
    transition-delay: 0ms;
  }
`;

export default styles;
