import styled, { css } from "astroturf";

import { FullViewportContainer } from "../../styles/main";

const styles = css`
  .default {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    display: flex;
    width: 100%;
    height: 100%;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }
  .earth {
    background-image: url(../../img/main-slides/earth.svg);
  }
  .portfolio {
    background-image: url(../../img/main-slides/portfolio.svg);
  }
  .europeRussia {
    background-image: url(../../img/main-slides/aboutSlide.svg);
  }
  .moscow {
    background-image: url(../../img/main-slides/moscow.svg);
  }
  .bus {
    background-image: url(../../img/main-slides/bus.svg);
  }
  .metro {
    background-image: url(../../img/main-slides/metro.svg);
  }
`;

export default styles;

export const SvgWrapper = styled(FullViewportContainer)``;
