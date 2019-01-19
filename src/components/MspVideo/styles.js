import styled from "astroturf";

export const VideoContainer = styled("div")`
  video {
    max-width: 100%;
    box-shadow: 0 2.2857rem 2.2857rem 0 rgba(10, 18, 33, 0.15);
    @media (max-width: 768px) {
      box-shadow: 0 1.7142rem 1.7142rem 0 rgba(10, 18, 33, 0.15);
    }
    @media (max-width: 576px) {
      box-shadow: 0 1.1428rem 1.1428rem 0 rgba(10, 18, 33, 0.15);
    }
    @media (max-width: 440px) {
      box-shadow: 0 0.5714rem 0.5714rem 0 rgba(10, 18, 33, 0.15);
    }
  }
`;
