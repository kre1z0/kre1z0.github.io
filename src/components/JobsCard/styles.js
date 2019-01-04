import styled, { css } from "astroturf";

import { Swiper } from "../../components/Swiper/Swiper";

export const JobsCardContainer = styled("section")`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
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
    @media only screen and (max-device-height: 360px) {
      display: none;
    }
  }
`;

export default styles;
