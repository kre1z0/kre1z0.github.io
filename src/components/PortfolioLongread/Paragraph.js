import styled from "astroturf";

export const Paragraph = styled("p")`
  font-size: 1.1428rem;
  line-height: 1.5;
  margin-bottom: 2rem;
  @media (max-width: 768px) {
    font-size: 1rem;
    line-height: 1.43;
    margin-bottom: 1.6rem;
  }
  @media (max-width: 576px) {
    font-size: 0.8571rem;
    line-height: 1.5;
  }
`;
