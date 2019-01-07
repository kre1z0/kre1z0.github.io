import styled from "astroturf";

export const Section = styled("section")`
  width: 100vw;
  padding: 0 8.1428rem;
  @media (max-width: 1000px) {
    padding: 0 3.5714rem;
  }
  @media (max-width: 440px) {
    padding: 0 1.7857rem;
  }
`;

export const Article = styled("article")`
  max-width: 64.2857rem;
  margin: 0 auto;
  > p {
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

export const H2 = styled("h2")`
  line-height: normal;
  font-size: 3rem;
  margin-bottom: 2.1428rem;
`;

export const Paragraph = styled("p")`
  font-size: 1.2857rem;
  line-height: 1.33;
  margin-bottom: 2rem;
`;
