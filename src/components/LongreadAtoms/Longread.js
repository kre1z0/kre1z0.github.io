import styled from "astroturf";

export const Section = styled("section")`
  width: 100vw;
  padding: 8.4rem 8.1428rem 9rem 8.1428rem;
  @media (max-width: 992px) {
    padding: 6rem 7.8571rem 6.4rem 7.8571rem;
  }
  @media (max-width: 768px) {
    padding: 4.7rem 3.1428rem 5.1rem 3.1428rem;
  }
  @media (max-width: 576px) {
    padding: 3.2rem 1.4285rem 3.6rem 1.4285rem;
  }
  @media (max-width: 440px) {
    padding: 2rem 1.4285rem 2.4rem 1.4285rem;
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

export const H1 = styled("h1")`
  line-height: normal;
  font-size: 3.4285rem;
  margin-bottom: 1.5rem;
  @media (max-width: 992px) {
    font-size: 2.5714rem;
  }
  @media (max-width: 768px) {
    font-size: 1.7142rem;
    margin-bottom: 1.2rem;
  }

  @media (max-width: 576px) {
    font-size: 1.4285rem;
    margin-bottom: 1rem;
  }
  &.portfolio {
    font-size: 2.2857rem;
    margin-bottom: 3.5rem;
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
