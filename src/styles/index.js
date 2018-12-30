import { css } from "astroturf";

const styles = css`
  .indexPageContainer {
    h1 {
      @media (max-height: 400px) {
        font-size: 2rem;
      }
    }
  }
`;

export default styles;
