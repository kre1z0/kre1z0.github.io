import { css } from "astroturf";

const styles = css`
  .indexContainer {
    @media (max-width: 812px) and (max-height: 275px) and (orientation: landscape) {
      margin: 2.5971rem auto 0 auto;
      height: calc(100% - 2.5971rem);
    }
  }
`;

export default styles;
