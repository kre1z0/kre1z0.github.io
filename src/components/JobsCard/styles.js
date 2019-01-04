import styled, { css } from "astroturf";

import { Swiper } from "../../components/Swiper/Swiper";

export const JobsCardContainer = styled("section")`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  @media (min-width: 1001px) {
    display: none;
  }
`;

export const JobsCardSwiper = styled(Swiper)`
  width: 100%;
  height: 100%;
`;

const styles = css`
  .jobsCardBullets {
    max-width: 20rem;
    display: flex;
    flex-wrap: wrap;
    @media (max-height: 360px) {
      display: none;
    }
  }
`;

export default styles;
