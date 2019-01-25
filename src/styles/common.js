import { css } from "astroturf";

export const common = css`
  .container {
    max-width: 114.2857rem;
    padding-left: 6.4285rem;
    padding-right: 6.4285rem;
    @media (max-width: 1100px) {
      padding-left: 3.2857rem;
      padding-right: 3.2857rem;
    }
    @media screen and (max-width: 767px) {
      padding-left: 1.7142rem;
      padding-right: 1.7142rem;
    }
  }
`;
