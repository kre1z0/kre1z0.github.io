import { css } from "astroturf";

export const slideY = css`
  .entering {
    transform: translateY(100%);
  }
  .entered {
    transform: translateY(0);
  }
  .exiting {
    transform: translateY(-100%);
  }
`;

export const fade = css`
  .entering {
    opacity: 0;
  }
  .entered {
    opacity: 1;
  }
  .exiting {
    opacity: 0;
  }
`;
