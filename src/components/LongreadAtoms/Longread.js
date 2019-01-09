import styled from "astroturf";

export const Section = styled("section")`
  width: 100vw;
  padding: 0 8.1428rem;
  @media (max-width: 992px) {
    padding: 0 7.8571rem;
  }
  @media (max-width: 768px) {
    padding: 0 3.1428rem;
  }
  @media (max-width: 576px) {
    padding: 0 1.4285rem;
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
  @media (max-width: 992px) {
    font-size: 2.2857rem;
  }
  @media (max-width: 768px) {
    font-size: 1.7142rem;
    margin-bottom: 1.8428rem;
  }
  @media (max-width: 576px) {
    font-size: 1.42857rem;
  }
  @media (max-width: 440px) {
    margin-bottom: 1rem;
  }
`;

export const Paragraph = styled("p")`
  font-size: 1.2857rem;
  line-height: 1.33;
  margin-bottom: 2rem;
  @media (max-width: 992px) {
    font-size: 1.1428rem;
    line-height: 1.5;
  }
  @media (max-width: 768px) {
    font-size: 1rem;
    line-height: 1.43;
    margin-bottom: 1.64rem;
  }
  @media (max-width: 576px) {
    font-size: 0.8571rem;
    line-height: 1.5;
    margin-bottom: 1rem;
  }
`;
