import styled from "astroturf";

export const SectionWithIconContainer = styled("div")`
  padding-top: 2.4rem;
  display: flex;
  justify-content: space-around;
  align-items: stretch;
  @media (max-width: 991px) {
    padding-top: 1.4rem;
  }
  @media screen and (min-width: 320px) and (max-width: 767px) and (orientation: portrait) {
    flex-direction: column;
    padding-top: 0;
    > section {
      p {
        padding: 0;
      }
      &:not(:last-child) {
        margin-bottom: 1.8rem;
      }
    }
  }
`;

export const Content = styled("div")`
  display: -ms-flexbox;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: center;
  flex-shrink: 0;
  flex-grow: 1;
`;

export const Section = styled("section")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 25.7142rem;
  img {
    margin-bottom: auto;
    max-width: 6.8rem;
  }
  h4 {
    display: flex;
    align-items: center;
    justify-content: center;
    white-space: nowrap;
    flex-shrink: 0;
    flex-grow: 1;
  }
  p {
    padding: 0 1rem;
    margin-bottom: 0;
  }
  @media (max-width: 991px) {
    max-width: 22.7142rem;
    img {
      max-width: 6rem;
    }
  }
  @media (max-width: 767px) {
    img {
      max-width: 4.5rem;
    }
    h4 {
      max-width: 14rem;
      margin: 0 auto 1rem auto;
      white-space: normal;
    }
  }
  @media screen and (min-width: 320px) and (max-width: 767px) and (orientation: landscape) {
    p {
      flex-shrink: 0;
      flex-grow: 1;
    }
  }
`;
