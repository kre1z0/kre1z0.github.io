import { css } from "astroturf";

export const enterTimeout = 500;
export const exitTimeout = 1000;

export const scale = css`
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

export const transition = css`
  .entered {
    transition-duration: ${enterTimeout}ms;
    transition-timing-function: ease-in-out;
    transition-property: all;
  }
  .exiting {
    transition-duration: ${exitTimeout}ms;
    transition-timing-function: ease-in-out;
    transition-property: all;
  }
`;

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
