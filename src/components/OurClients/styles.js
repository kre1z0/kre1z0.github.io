import styled from "astroturf";

export const OurClientsContainer = styled("div")`
  display: flex;
  margin: 0 auto;
  justify-content: center;
  flex-wrap: wrap;
  padding-top: 4rem;
  max-width: 78.5714rem;
  @media (max-width: 1000px) {
    padding-top: 3rem;
  }
  @media (max-width: 440px) {
    padding-top: 1.4rem;
  }
`;

export const OurClientsItem = styled("div")`
  width: calc(100% / 6);
  height: 4rem;
  flex-shrink: 0;
  background-position: center;
  background-repeat: no-repeat;
  filter: grayscale(100%);
  background-color: #f3f4f7;
  background-blend-mode: multiply;
  background-size: 7.1428rem auto;
  margin-bottom: 2rem;
  @media (max-width: 1000px) {
    background-size: 5rem auto;
    height: 3rem;
  }
  @media (max-width: 440px) {
    margin-bottom: 1.4rem;
    width: calc(100% / 3);
    background-size: 4rem auto;
    height: 2rem;
  }
`;
