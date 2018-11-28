import styled, { css } from "astroturf";

export const styles = css`
  .entering {
    transform: scale(0.5);
  }
  .entered {
    transform: scale(1);
  }
  .exiting {
    transform: scale(1.5);
  }
`;

export const Background = styled("div")`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  &.main {
    background-image: url(../../img/index.svg);
  }
  &.portfolio {
    background-image: url(../../img/portfolio.svg);
  }
`;
