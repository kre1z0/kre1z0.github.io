import styled from "astroturf";

export const Paragraph = styled("p")`
  font-size: 1.1428rem;
  line-height: 1.5;
  margin-bottom: 2rem;
  @media (max-width: 991px) {
    font-size: 1rem;
    line-height: 1.43;
    margin-bottom: 1.6rem;
  }
  @media (max-width: 767px) and (orientation: landscape) {
    font-size: 0.8571rem;
    line-height: 1.5;
  }
`;
